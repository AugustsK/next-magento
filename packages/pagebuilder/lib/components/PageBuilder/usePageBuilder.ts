import { useMemo } from 'react';
import getHtmlDocument from "../../util/getHtmlDocument";
import convertToInlineStyles from "../../util/convertToInlineStyles";
import {DOMWindow} from "jsdom";
import { getContentType } from "../../config";

const bodyId = 'html-body';

let document: Document;
let window: DOMWindow | typeof globalThis;

export interface ContentTypeObject {
    contentType: string,
    appearance: string | null,
    children: ContentTypeObject[]
}

const createContentTypeObject = (type: string, node?: HTMLElement): ContentTypeObject => {
    return {
        contentType: type,
        appearance: node ? node.getAttribute('data-appearance') : null,
        children: []
    };
};

const walk = (rootEl: Node, contentTypeStructureObj: ContentTypeObject) => {
    const tree = document.createTreeWalker(
        rootEl,
        window.NodeFilter.SHOW_ELEMENT | window.NodeFilter.SHOW_TEXT
    );

    let currentNode = tree.nextNode() as HTMLElement;
    while (currentNode) {
        if (currentNode.nodeType !== window.Node.ELEMENT_NODE) {
            currentNode = tree.nextNode() as HTMLElement;
            continue;
        }

        const contentType = currentNode.getAttribute('data-content-type');

        if (!contentType) {
            currentNode = tree.nextNode() as HTMLElement;
            continue;
        }

        const props = createContentTypeObject(contentType, currentNode);
        const resolvedContentType = getContentType(contentType);

        if (resolvedContentType) {
            Object.assign(
                props,
                resolvedContentType.configExtractor(currentNode, props)
            );
        }

        contentTypeStructureObj.children.push(props);
        walk(currentNode, props);
        currentNode = tree.nextSibling() as HTMLElement;
    }

    return contentTypeStructureObj;
};

export const usePageBuilder = ({ html }: { html: string }) => {
    return useMemo(() => {
        const [container, parent] = getHtmlDocument(html);
        const stageContentType = createContentTypeObject('root-container');

        document = container;
        window = parent;

        container.body.id = bodyId;
        convertToInlineStyles(container.body as HTMLBodyElement);

        return walk(container.body, stageContentType);
    }, [html]);
}
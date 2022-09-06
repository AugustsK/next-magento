import { useMemo } from 'react';
import getHtmlDocument from "../../util/getHtmlDocument";
import convertToInlineStyles from "../../util/convertToInlineStyles";
import {DOMWindow} from "jsdom";

const bodyId = 'html-body';

let document: Document;
let window: DOMWindow | typeof globalThis;

interface ContentTypeObject {
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
        //const contentTypeConfig = getContentTypeConfig(contentType);

        // if (
        //     contentTypeConfig &&
        //     typeof contentTypeConfig.configAggregator === 'function'
        // ) {
        //     try {
        //         Object.assign(
        //             props,
        //             contentTypeConfig.configAggregator(currentNode, props)
        //         );
        //     } catch (e) {
        //         console.error(
        //             `Failed to aggregate config for content type ${contentType}.`,
        //             e
        //         );
        //     }
        // } else {
        //     console.warn(
        //         `Page Builder ${contentType} content type is not supported, this content will not be rendered.`
        //     );
        // }

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
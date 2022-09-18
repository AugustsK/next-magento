import {DOMWindow, JSDOM} from 'jsdom';

const isServer = !globalThis.document;

const getHtmlDocument = (html: string): [Document, DOMWindow|typeof globalThis] => {
    if (isServer || !globalThis.DOMParser) {
        const dom = new JSDOM(html);

        return [dom.window.document, dom.window];
    }

    return [new DOMParser().parseFromString(html, 'text/html'), globalThis];
};

export default getHtmlDocument;
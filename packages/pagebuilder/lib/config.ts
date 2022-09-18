import Row, { extractRowConfig } from "./components/ContentTypes/Row";

const config = new Map([
    ['row', {
        configExtractor: extractRowConfig,
        Component: Row
    }]
]);

export const getContentType = (type: string) => config.has(type) ? config.get(type) : null;

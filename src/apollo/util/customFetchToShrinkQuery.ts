import { shrinkQuery } from '@/app/apollo/util/shrinkQuery';

/**
 * Intercept and shrink URLs from GET queries.
 *
 * Using GET makes it possible to use edge caching in Magento Cloud, but risks
 * exceeding URL limits with default usage of Apollo's http link.
 *
 * `shrinkQuery` encodes the URL in a more efficient way.
 */
export const customFetchToShrinkQuery = (uri: string | URL, options: RequestInit): Promise<Response> => {
    const resource = options.method === 'GET' ? shrinkQuery(uri) : uri;

    return globalThis.fetch(resource, options);
};

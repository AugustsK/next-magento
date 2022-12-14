import { stripIgnoredCharacters } from 'graphql/utilities/stripIgnoredCharacters';

/**
 * Shrink a GraphQL query inside a URL used in a GET request.
 * There are 2 problems with Apollo-client's encoding of URLs:
 *  1. Unnecessary spaces/line-breaks/punctuators are not removed,
 *     which leads to them being encoded as hex, increasing the
 *     URL length dramatically
 *  2. `encodeURI` is used, which encodes spaces with 3 characters (%20).
 *     Because the GraphQL query is inside a querystring, we can use
 *     application/x-www-form-urlencoded, which encodes spaces with a single
 *     character
 */
export function shrinkQuery(fullURL: string | URL): string | URL {
    const url = new URL(fullURL);

    // Read from URL implicitly decodes the querystring
    const query = url.searchParams.get('query');

    if (!query) {
        return fullURL;
    }

    const strippedQuery = stripIgnoredCharacters(query);

    // URLSearchParams.set will use application/x-www-form-urlencoded encoding
    url.searchParams.set('query', strippedQuery);

    return url.toString();
}

import { ApolloLink, UriFunction, createHttpLink as createApolloHttpLink } from '@apollo/client';

import { customFetchToShrinkQuery } from '@/app/apollo/util';

export default function createHttpLink(uri: string | UriFunction): ApolloLink {
    return createApolloHttpLink({
        fetch: customFetchToShrinkQuery,
        useGETForQueries: true,
        uri
    });
}

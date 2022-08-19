import {ApolloLink, createHttpLink as createApolloHttpLink, UriFunction} from '@apollo/client';
import { customFetchToShrinkQuery } from "@/app/apollo/util";

export default function createHttpLink(uri: string|UriFunction): ApolloLink {
    return createApolloHttpLink({
        fetch: customFetchToShrinkQuery,
        useGETForQueries: true,
        uri
    })
}

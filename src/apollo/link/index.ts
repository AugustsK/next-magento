import {ApolloLink, UriFunction} from '@apollo/client';

import createStoreLink from "@/app/apollo/link/storeLink";
import createHttpLink from "@/app/apollo/link/httpLink";

export const createApolloLink = (ssr: boolean, uri: string|UriFunction) => {
    const links = [
        createStoreLink()
    ];

    if (!ssr) {
        links.push(createHttpLink(uri));
    } else {
        links.push(createHttpLink(new URL('/graphql', process.env.MAGENTO_BACKEND_URL).toString()))
    }

    return ApolloLink.from(Array.from(links));
};

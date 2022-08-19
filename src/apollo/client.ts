import { ApolloClient } from '@apollo/client';
import { persistCache, LocalStorageWrapper } from 'apollo3-cache-persist';
import { createCacheInstance } from "@/app/apollo";
import { createApolloLink } from "@/app/apollo/link";

const createClient = () => {
    const cache = createCacheInstance();
    const ssr = !globalThis.document;
    const apiBase = `${globalThis?.location?.origin}/api/graphql`;
    const apolloLink = createApolloLink(ssr, apiBase);

    if (!ssr) {
        persistCache({
            cache,
            storage: new LocalStorageWrapper(globalThis.localStorage),
        });
    }

    return new ApolloClient({
        link: apolloLink,
        cache,
        ssrMode: ssr
    });
}

export default createClient;

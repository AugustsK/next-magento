import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export default function createStoreLink(): ApolloLink {
    return setContext((_, { headers }) => {
        const storeCode = process.env.NEXT_PUBLIC_STORE_VIEW_CODE;
        const storeCurrency = process.env.NEXT_PUBLIC_STORE_VIEW_CURRENCY;

        return {
            headers: {
                ...headers,
                store: storeCode,
                ...(storeCurrency && {
                    'Content-Currency': storeCurrency
                })
            }
        };
    });
}

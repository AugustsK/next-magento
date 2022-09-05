import { StoreConfigObject } from '@/types/objects';
import { StoreConfigQuery } from '@/types/queries';

import { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from '@apollo/client';

import { getStoreConfig } from '@/queries';

export default async function storeConfig(client: ApolloClient<NormalizedCacheObject>): Promise<StoreConfigObject> {
    const { data }: ApolloQueryResult<StoreConfigQuery> = await client.query({
        query: getStoreConfig,
        fetchPolicy: 'network-only'
    });

    return data.storeConfig;
}

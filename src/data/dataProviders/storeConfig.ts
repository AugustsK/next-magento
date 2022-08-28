import { StoreConfigObject } from '@/types/objects';
import { StoreConfigQuery } from '@/types/queries';

import { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from '@apollo/client';

import { getStoreConfig } from '@/queries';

type StoreConfigKey = 'storeConfig';

export default async function storeConfig(
    client: ApolloClient<NormalizedCacheObject>
): Promise<[StoreConfigKey, StoreConfigObject]> {
    const { data }: ApolloQueryResult<StoreConfigQuery> = await client.query({
        query: getStoreConfig,
        fetchPolicy: 'network-only'
    });

    return ['storeConfig' as const, data.storeConfig];
}

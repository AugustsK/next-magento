import { StoreConfigQuery } from "@/types/queries";
import { StoreConfigObject } from "@/types/objects";
import { getStoreConfig } from "@/queries";
import {ApolloClient, NormalizedCacheObject, ApolloQueryResult} from "@apollo/client";

type StoreConfigKey = 'storeConfig';

export default async function storeConfig(client: ApolloClient<NormalizedCacheObject>): Promise<[StoreConfigKey, StoreConfigObject]> {
    const { data }: ApolloQueryResult<StoreConfigQuery> = await client.query({
        query: getStoreConfig,
        fetchPolicy: 'network-only'
    });

    return ['storeConfig' as const, data.storeConfig];
}
import { CategoryListQuery } from "@/types/queries";
import { CategoryTreeObject } from "@/types/objects";
import { getMegaMenu } from "@/queries";
import {ApolloClient, NormalizedCacheObject, ApolloQueryResult} from "@apollo/client";

type MegaMenuKey = 'megaMenu';

export default async function megaMenu(client: ApolloClient<NormalizedCacheObject>): Promise<[MegaMenuKey, CategoryTreeObject[]]> {
    const { data }: ApolloQueryResult<CategoryListQuery> = await client.query({
        query: getMegaMenu,
        fetchPolicy: 'network-only'
    });

    return ['megaMenu' as const, data.categoryList];
}
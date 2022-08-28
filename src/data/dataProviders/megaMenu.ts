import { CategoryTreeObject } from '@/types/objects';
import { CategoryListQuery } from '@/types/queries';

import { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from '@apollo/client';

import { getMegaMenu } from '@/queries';

type MegaMenuKey = 'megaMenu';

export default async function megaMenu(
    client: ApolloClient<NormalizedCacheObject>
): Promise<[MegaMenuKey, CategoryTreeObject[]]> {
    const { data }: ApolloQueryResult<CategoryListQuery> = await client.query({
        query: getMegaMenu,
        fetchPolicy: 'network-only'
    });

    return ['megaMenu' as const, data.categoryList];
}

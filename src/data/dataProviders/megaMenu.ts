import { CategoryTreeObject } from '@/types/objects';
import { CategoryListQuery } from '@/types/queries';

import { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from '@apollo/client';

import { getMegaMenu } from '@/queries';

export default async function megaMenu(
    client: ApolloClient<NormalizedCacheObject>,
    rootCategoryUid: string
): Promise<CategoryTreeObject[]> {
    const { data }: ApolloQueryResult<CategoryListQuery> = await client.query({
        query: getMegaMenu,
        fetchPolicy: 'network-only',
        variables: {
            rootCategoryUid
        }
    });

    return data.categoryList;
}

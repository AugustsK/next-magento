import { SharedPageData } from '@/types';
import { CategoryTreeObject } from '@/types/objects';
import { RouteObject } from '@/types/objects/routeObject';
import { RouteQuery } from '@/types/queries/routeQuery';

import { ApolloQueryResult } from '@apollo/client';
import type { GetStaticProps, NextPage } from 'next';

import getPageData, { client } from '@/app/data';
import { getRoute } from '@/queries/route.gql';

interface MagentoRouteProps extends SharedPageData {
    route: Partial<RouteObject>;
}

const MagentoRoute: NextPage<MagentoRouteProps> = ({ route }) => {
    return (
        <div>
            <pre>{JSON.stringify(route, null, 2)}</pre>
        </div>
    );
};

export default MagentoRoute;

export const getStaticProps: GetStaticProps = async context => {
    const urlPath = ((context.params?.path as string[]) || []).join('/');
    const dataPromise = getPageData();
    const { data: urlData }: ApolloQueryResult<RouteQuery> = await client.query({
        query: getRoute,
        variables: {
            url: urlPath
        },
        fetchPolicy: 'network-only'
    });
    const data = await dataPromise;

    if (!urlData.route) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            ...data,
            route: urlData
        },
        revalidate: parseInt(process.env.PAGE_REVALIDATE_TIMEOUT || '300', 10)
    };
};

interface Path {
    params: {
        path: string[];
    };
}

export async function getStaticPaths() {
    const { storeConfig, megaMenu } = await getPageData();
    const paths: Path[] = [];
    const suffix = (storeConfig?.category_url_suffix || '').trim();

    // Generate category paths
    const iterateChildren = (children: Partial<CategoryTreeObject>[]) =>
        children.forEach(category => {
            if (category.url_path) {
                paths.push({
                    params: {
                        path: (category.url_path + suffix).split('/')
                    }
                });
            }

            if (category?.children?.length) {
                iterateChildren(category.children);
            }
        });

    iterateChildren(megaMenu);

    return {
        paths,
        fallback: 'blocking'
    };
}

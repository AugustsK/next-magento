import React, { Suspense } from 'react';

import { SharedPageData } from '@/types';
import { CategoryRouteObject, CategoryTreeObject, CmsRouteObject, ProductRouteObject } from '@/types/objects';
import { ROUTE_TYPE_ENUM, RouteObject } from '@/types/objects/routeObject';
import { RouteQuery } from '@/types/queries/routeQuery';

import { ApolloQueryResult } from '@apollo/client';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import getPageData, { client } from '@/app/data';
import { getRoute } from '@/queries/route.gql';

const DynamicCmsPage = dynamic(() => import('@/components/CmsPage'));
const DynamicCategoryPage = dynamic(() => import('@/components/CategoryPage'));
const DynamicProductPage = dynamic(() => import('@/components/ProductPage'));

interface MagentoRouteProps extends SharedPageData {
    route: RouteObject | CmsRouteObject | CategoryRouteObject | ProductRouteObject;
}

const MagentoRoute: NextPage<MagentoRouteProps> = ({ route }) => {
    const { type } = route;

    switch (type) {
        case ROUTE_TYPE_ENUM.CMS_PAGE:
            return (
                <Suspense fallback={'Loading...'}>
                    <DynamicCmsPage cmsPage={route as CmsRouteObject} />
                </Suspense>
            );
        case ROUTE_TYPE_ENUM.CATEGORY:
            return (
                <Suspense fallback={'Loading...'}>
                    <DynamicCategoryPage route={route as CategoryRouteObject} />
                </Suspense>
            );
        case ROUTE_TYPE_ENUM.PRODUCT:
            return (
                <Suspense fallback={'Loading...'}>
                    <DynamicProductPage route={route as ProductRouteObject} />
                </Suspense>
            );
    }

    return <div>Should never get here...</div>;
};

export default MagentoRoute;

export const getStaticProps: GetStaticProps = async context => {
    const data = await getPageData();
    const urlPath = ((context.params?.path as string[]) || []).join('/');

    const categoryVars = {
        currentPage: 1,
        pageSize: data.storeConfig.grid_per_page || 12,
        sort: {
            [data.storeConfig.catalog_default_sort_by || 'position']: 'ASC'
        }
    };

    const { data: urlData }: ApolloQueryResult<RouteQuery> = await client.query({
        query: getRoute,
        variables: {
            url: urlPath,
            ...categoryVars
        },
        fetchPolicy: 'network-only'
    });

    if (!urlData.route) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            ...data,
            route: urlData.route
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

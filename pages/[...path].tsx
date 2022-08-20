import { SharedPageData } from '@/types';
import { RouteObject } from '@/types/objects/routeObject';
import { RouteQuery } from '@/types/queries/routeQuery';

import { ApolloQueryResult } from '@apollo/client';
import type { GetServerSideProps, NextPage } from 'next';

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

export const getServerSideProps: GetServerSideProps = async context => {
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
        }
    };
};

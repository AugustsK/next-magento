import React, { Suspense } from 'react';

import { SharedPageData } from '@/types';
import { CmsPageObject } from '@/types/objects';
import { CmsPageQuery } from '@/types/queries';

import { ApolloQueryResult } from '@apollo/client';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';

import getPageData, { client } from '@/app/data';
import styles from '@/app/styles/pages/index.module.css';
import { getCmsPage } from '@/queries/cmsPage.gql';

const DynamicCmsPage = dynamic(() => import('@/components/CmsPage'));

interface HomePageProps extends SharedPageData {
    cmsPage: CmsPageObject;
}

const Home: NextPage<HomePageProps> = ({ cmsPage }) => {
    return (
        <div className={styles.container}>
            <Suspense fallback={'Loading...'}>
                <DynamicCmsPage cmsPage={cmsPage} />
            </Suspense>
        </div>
    );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const data = await getPageData();
    const {
        storeConfig: { cms_home_page }
    } = data;
    const { data: cmsPageData }: ApolloQueryResult<CmsPageQuery> = await client.query({
        query: getCmsPage,
        variables: {
            identifier: cms_home_page
        },
        fetchPolicy: 'network-only'
    });

    return {
        props: {
            ...data,
            cmsPage: cmsPageData.cmsPage
        }
    };
};

import { SharedPageData } from '@/types';
import { CmsPageObject } from '@/types/objects';
import { CmsPageQuery } from '@/types/queries';

import { ApolloQueryResult } from '@apollo/client';
import type { GetStaticProps, NextPage } from 'next';

import getPageData, { client } from '@/app/data';
import CmsPage from '@/components/CmsPage';
import { getCmsPage } from '@/queries/cmsPage.gql';
import styles from '@/styles/pages/index.module.css';

interface HomePageProps extends SharedPageData {
    cmsPage: Partial<CmsPageObject>;
}

const Home: NextPage<HomePageProps> = ({ cmsPage }) => {
    return (
        <div className={styles.container}>
            <CmsPage cmsPage={cmsPage} />
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
            storeConfig: data.storeConfig,
            megaMenu: data.megaMenu,
            cmsPage: cmsPageData.cmsPage
        }
    };
};

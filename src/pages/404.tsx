import { SharedPageData } from '@/types';
import { CmsPageObject } from '@/types/objects';
import { CmsPageQuery } from '@/types/queries';

import { ApolloQueryResult } from '@apollo/client';
import type { GetStaticProps, NextPage } from 'next';

import getPageData, { client } from '@/app/data';
import styles from '@/app/styles/pages/index.module.css';
import CmsPage from '@/components/CmsPage';
import { getCmsPage } from '@/queries/cmsPage.gql';

interface NotFoundProps extends SharedPageData {
    cmsPage: CmsPageObject;
}

const NotFound: NextPage<NotFoundProps> = ({ cmsPage }) => {
    return (
        <div className={styles.container}>
            <CmsPage cmsPage={cmsPage} />
        </div>
    );
};

export default NotFound;

export const getStaticProps: GetStaticProps = async () => {
    const data = await getPageData();
    const {
        storeConfig: { cms_no_route }
    } = data;
    const { data: cmsPageData }: ApolloQueryResult<CmsPageQuery> = await client.query({
        query: getCmsPage,
        variables: {
            identifier: cms_no_route
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

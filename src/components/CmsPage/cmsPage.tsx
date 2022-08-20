import React from 'react';

import { CmsPageObject } from '@/types/objects';

import Head from 'next/head';

import RichContent from '@/components/RichContent';

interface CmsPageProps {
    cmsPage: Partial<CmsPageObject>;
}

const CmsPage: React.FC<CmsPageProps> = ({ cmsPage }) => {
    const { content, meta_description, meta_keywords, meta_title, title } = cmsPage;

    return (
        <>
            <Head>
                <title>{meta_title || title}</title>
                <meta name="description" content={meta_description} />
                <meta name="keywords" content={meta_keywords} />
            </Head>
            <RichContent html={content || ''} />
        </>
    );
};

export default CmsPage;

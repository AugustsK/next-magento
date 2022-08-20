import React from 'react';

import type { LayoutProps } from '@types';
import Head from 'next/head';

import Header from '@/components/Framework/Header';

const DefaultLayout: React.FC<LayoutProps> = ({ children, storeConfig }) => {
    return (
        <>
            <Head>
                <title>{storeConfig?.default_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <footer>
                <h2>Footer</h2>
            </footer>
        </>
    );
};

export default DefaultLayout;

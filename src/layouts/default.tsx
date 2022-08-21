import React from 'react';

import type { LayoutProps } from '@/types';

import Head from 'next/head';

import classes from '@/app/styles/layouts/default.module.css';
import Footer from '@/components/Framework/Footer';
import Header from '@/components/Framework/Header';

const DefaultLayout: React.FC<LayoutProps> = ({ children, storeConfig }) => {
    return (
        <>
            <Head>
                <title>{storeConfig?.default_title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={classes.main}>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;

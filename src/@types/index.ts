import type { ReactElement } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { SharedPageData } from '@/app/@types/data';

export interface LayoutProps extends SharedPageData {
    children: JSX.Element;
}

export type NextPageWithLayout = NextPage & {
    // eslint-disable-next-line no-unused-vars
    getLayout?: (page: ReactElement, pageProps: SharedPageData) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export type { SharedPageData };

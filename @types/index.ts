import type { ReactElement } from 'react';

import { SharedPageData } from '@/types/data';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

export interface LayoutProps extends SharedPageData {
    children: JSX.Element;
}

export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement, pageProps: SharedPageData) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export type { SharedPageData };

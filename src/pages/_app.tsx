import React from 'react';

import type { AppPropsWithLayout } from '@/types';

import '@/app/styles/globals.css';
import AppProvider from '@/components/AppProvider';
import { useDetectScrollWidth } from '@/hooks/useDetectScrollWidth';
import DefaultLayout from '@/layouts/default';

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
    const getLayout =
        Component.getLayout ?? ((page, pageProps) => <DefaultLayout {...pageProps}>{page}</DefaultLayout>);

    useDetectScrollWidth();

    return (
        <AppProvider
            storeConfig={pageProps.storeConfig}
            reCaptchaConfig={pageProps.reCaptchaConfig}
            megaMenu={pageProps.megaMenu}
        >
            {getLayout(<Component {...pageProps} />, pageProps)}
        </AppProvider>
    );
};

export default App;

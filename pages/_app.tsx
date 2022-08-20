import React from 'react';

import type { AppPropsWithLayout } from '@/types';

import AppProvider from '@/components/AppProvider';
import DefaultLayout from '@/layouts/default';
import '@/styles/globals.css';

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
    const getLayout =
        Component.getLayout ?? ((page, pageProps) => <DefaultLayout {...pageProps}>{page}</DefaultLayout>);

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

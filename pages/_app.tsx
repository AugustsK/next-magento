import React from "react";
import '@/styles/globals.css'
import type { AppPropsWithLayout } from '@/types';

import DefaultLayout from '@/layouts/default';
import AppProvider from '@/components/AppProvider';

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page, pageProps) => <DefaultLayout {...pageProps}>{page}</DefaultLayout>);

  return (
    <AppProvider>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </AppProvider>
  );
}

export default App

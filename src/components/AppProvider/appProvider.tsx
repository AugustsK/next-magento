import React from 'react';

import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/types/objects';

import { ApolloProvider } from '@apollo/client';

import createClient from '@/app/apollo/client';
import ReCaptchaContextProvider from '@/context/reCaptchaContext';
import StoreDataContextProvider from '@/context/storeData';

const webClient = createClient();

type AppProviderProps = {
    children: JSX.Element;
    reCaptchaConfig: RecaptchaConfigObject;
    storeConfig: StoreConfigObject;
    megaMenu: CategoryTreeObject[];
};

const AppProvider: React.FC<AppProviderProps> = ({ children, megaMenu, reCaptchaConfig, storeConfig }) => {
    return (
        <ApolloProvider client={webClient}>
            <StoreDataContextProvider megaMenu={megaMenu} reCaptchaConfig={reCaptchaConfig} storeConfig={storeConfig}>
                <ReCaptchaContextProvider>{children}</ReCaptchaContextProvider>
            </StoreDataContextProvider>
        </ApolloProvider>
    );
};

export default AppProvider;

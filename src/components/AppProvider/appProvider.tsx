import React from 'react';

import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/types/objects';

import { ApolloProvider } from '@apollo/client';

import createClient from '@/app/apollo/client';
import ReCaptchaContextProvider from '@/context/reCaptchaContext';
import SessionContextProvider from '@/context/sessionContext';
import StoreDataContextProvider from '@/context/storeData';

const webClient = createClient();

const contextProviders = [SessionContextProvider, ReCaptchaContextProvider];

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
                {contextProviders.reduceRight(
                    (memo, ContextProvider) => (
                        <ContextProvider>{memo}</ContextProvider>
                    ),
                    children
                )}
            </StoreDataContextProvider>
        </ApolloProvider>
    );
};

export default AppProvider;

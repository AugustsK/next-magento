import React from 'react';

import { CategoryTreeObject, StoreConfigObject } from '@/types/objects';

import { ApolloProvider } from '@apollo/client';

import createClient from '@/app/apollo/client';
import StoreDataContextProvider from '@/context/storeData';

const webClient = createClient();

type AppProviderProps = {
    children: JSX.Element;
    storeConfig: StoreConfigObject;
    megaMenu: CategoryTreeObject[];
};

const AppProvider: React.FC<AppProviderProps> = ({ children, megaMenu, storeConfig }) => {
    return (
        <ApolloProvider client={webClient}>
            <StoreDataContextProvider megaMenu={megaMenu} storeConfig={storeConfig}>
                {children}
            </StoreDataContextProvider>
        </ApolloProvider>
    );
};

export default AppProvider;

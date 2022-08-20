import React from 'react';

import { ApolloProvider } from '@apollo/client';

import createClient from '@/app/apollo/client';

const webClient = createClient();

type AppProviderProps = {
    children: JSX.Element;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return <ApolloProvider client={webClient}>{children}</ApolloProvider>;
};

export default AppProvider;

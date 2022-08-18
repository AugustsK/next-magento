import React from 'react';
import { ApolloProvider } from "@apollo/client";
import client from '@/app/apollo/client';

type AppProviderProps = {
    children: JSX.Element
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default AppProvider;

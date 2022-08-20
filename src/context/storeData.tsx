import React, { createContext, useContext, useMemo } from 'react';

import { CategoryTreeObject, StoreConfigObject } from '@/types/objects';

interface IStoreDataContext {
    storeConfig: StoreConfigObject;
    megaMenu: CategoryTreeObject[];
}

const StoreDataContext = createContext<IStoreDataContext>({
    storeConfig: {} as StoreConfigObject,
    megaMenu: [] as CategoryTreeObject[]
});

interface StoreConfigProviderProps {
    children: JSX.Element;
    storeConfig: StoreConfigObject;
    megaMenu: CategoryTreeObject[];
}

const StoreDataContextProvider: React.FC<StoreConfigProviderProps> = props => {
    const { children, storeConfig, megaMenu } = props;
    const contextValue = useMemo(() => ({ storeConfig, megaMenu }), [megaMenu, storeConfig]);

    return <StoreDataContext.Provider value={contextValue}>{children}</StoreDataContext.Provider>;
};

export const useStoreDataContext = () => useContext(StoreDataContext);

export default StoreDataContextProvider;

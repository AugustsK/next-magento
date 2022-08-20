import React, { createContext, useContext, useMemo } from 'react';

import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/types/objects';

interface IStoreDataContext {
    storeConfig: StoreConfigObject;
    reCaptchaConfig: RecaptchaConfigObject;
    megaMenu: CategoryTreeObject[];
}

const StoreDataContext = createContext<IStoreDataContext>({
    storeConfig: {} as StoreConfigObject,
    reCaptchaConfig: {} as RecaptchaConfigObject,
    megaMenu: [] as CategoryTreeObject[]
});

interface StoreConfigProviderProps {
    children: JSX.Element;
    storeConfig: StoreConfigObject;
    reCaptchaConfig: RecaptchaConfigObject;
    megaMenu: CategoryTreeObject[];
}

const StoreDataContextProvider: React.FC<StoreConfigProviderProps> = props => {
    const { children, storeConfig, reCaptchaConfig, megaMenu } = props;
    const contextValue = useMemo(
        () => ({ storeConfig, reCaptchaConfig, megaMenu }),
        [megaMenu, reCaptchaConfig, storeConfig]
    );

    return <StoreDataContext.Provider value={contextValue}>{children}</StoreDataContext.Provider>;
};

export const useStoreDataContext = () => useContext(StoreDataContext);

export default StoreDataContextProvider;

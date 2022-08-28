import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import { read, store } from '@/utils/storage';

const C_KEY = 'sct';
const C_LIFETIME = 24 * 3600;

interface IStoreDataContext {
    isLoggedIn: boolean;
    logInSession(token: string): void;
    logOutSession(): void;
}

const SessionContext = createContext<IStoreDataContext>({
    isLoggedIn: false,
    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
    logInSession(token) {},
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    logOutSession() {}
});

interface StoreConfigProviderProps {
    children: JSX.Element;
}

const SessionContextProvider: React.FC<StoreConfigProviderProps> = props => {
    const { children } = props;
    const storedUserToken = read<string>(C_KEY);
    const [userToken, setUserToken] = useState<string | null>(storedUserToken);

    const logInSession = useCallback((token: string) => setUserToken(token), [setUserToken]);

    const logOutSession = useCallback(() => setUserToken(null), [setUserToken]);

    const contextValue = useMemo(
        () => ({
            isLoggedIn: !!userToken,
            logInSession,
            logOutSession
        }),
        [logInSession, logOutSession, userToken]
    );

    useEffect(() => {
        store(C_KEY, userToken, C_LIFETIME);
    }, [userToken]);

    return <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>;
};

export const useSessionContext = () => useContext(SessionContext);

export default SessionContextProvider;

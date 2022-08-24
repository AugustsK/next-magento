import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

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
    const [userToken, setUserToken] = useState<string | null>(null);

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

    return <SessionContext.Provider value={contextValue}>{children}</SessionContext.Provider>;
};

export const useSessionContext = () => useContext(SessionContext);

export default SessionContextProvider;

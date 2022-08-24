import React, { createContext, useContext, useMemo, useState } from 'react';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { useStoreDataContext } from '@/context/storeData';
import { useUniqueId } from '@/hooks';

interface IReCaptchaContext {
    setShouldLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReCaptchaContext = createContext<IReCaptchaContext>({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setShouldLoad() {}
});

type ReCaptchaContextProviderProps = {
    children: React.ReactNode;
};

const ReCaptchaContextProvider: React.FC<ReCaptchaContextProviderProps> = props => {
    const { children } = props;
    const [shouldLoad, setShouldLoad] = useState(false);
    const { reCaptchaConfig } = useStoreDataContext();
    const { id } = useUniqueId();
    const contextValue = useMemo(() => ({ setShouldLoad }), [setShouldLoad]);

    return (
        <ReCaptchaContext.Provider value={contextValue}>
            <GoogleReCaptchaProvider
                reCaptchaKey={shouldLoad ? reCaptchaConfig?.website_key : ''}
                language={reCaptchaConfig?.language_code}
                container={
                    reCaptchaConfig?.badge_position === 'inline'
                        ? {
                              element: id`recaptcha`,
                              parameters: {
                                  badge: reCaptchaConfig?.badge_position
                              }
                          }
                        : undefined
                }
            >
                {children}
            </GoogleReCaptchaProvider>
        </ReCaptchaContext.Provider>
    );
};

export const useReCaptchaContext = () => useContext(ReCaptchaContext);

export default ReCaptchaContextProvider;

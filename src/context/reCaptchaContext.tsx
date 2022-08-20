import React, { createContext, useContext, useMemo, useState } from 'react';

import Script from 'next/script';

import { createClientOnlyComponent } from '@/app/utils';
import { useStoreDataContext } from '@/context/storeData';

const GOOGLE_RECAPTCHA_URL = 'https://www.google.com/recaptcha/api.js';

interface IReCaptchaContext {
    setShouldLoad: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReCaptchaContext = createContext<IReCaptchaContext>({
    setShouldLoad() {}
});

type ReCaptchaContextProviderProps = {
    children: React.ReactNode;
};

const ReCaptchaContextProvider: React.FC<ReCaptchaContextProviderProps> = props => {
    const { children } = props;
    const [shouldLoad, setShouldLoad] = useState(false);
    const { reCaptchaConfig } = useStoreDataContext();
    const ClientOnlyScript = createClientOnlyComponent(Script);
    const contextValue = useMemo(() => ({ setShouldLoad }), [setShouldLoad]);

    const scriptUrl = new URL(GOOGLE_RECAPTCHA_URL);

    scriptUrl.searchParams.append('badge', reCaptchaConfig?.badge_position || 'bottomright');
    scriptUrl.searchParams.append(
        'render',
        reCaptchaConfig?.badge_position === 'inline' ? 'explicit' : reCaptchaConfig?.website_key
    );
    scriptUrl.searchParams.append('onload', 'onloadRecaptchaCallback');

    if (reCaptchaConfig?.language_code) {
        scriptUrl.searchParams.append('hl', reCaptchaConfig.language_code);
    }

    return (
        <ReCaptchaContext.Provider value={contextValue}>
            {children}
            {shouldLoad && <ClientOnlyScript id="recaptcha-js" src={scriptUrl.toString()} />}
        </ReCaptchaContext.Provider>
    );
};

export const useReCaptchaContext = () => useContext(ReCaptchaContext);

export default ReCaptchaContextProvider;

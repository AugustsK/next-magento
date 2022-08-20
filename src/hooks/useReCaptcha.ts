/* eslint-disable */
import { useCallback, useEffect, useState } from 'react';

import { ReCaptchaFormEnum } from '@/types/objects';

import { useReCaptchaContext } from '@/context/reCaptchaContext';
import { useStoreDataContext } from '@/context/storeData';

const GOOGLE_RECAPTCHA_HEADER = 'X-ReCaptcha';

interface UseReCaptchaProps {
    currentForm: ReCaptchaFormEnum;
    formAction: string;
}

export const useReCaptcha = (props: UseReCaptchaProps) => {
    const { currentForm, formAction } = props;
    const { reCaptchaConfig } = useStoreDataContext();
    const { setShouldLoad } = useReCaptchaContext();

    useEffect(() => {
        if (reCaptchaConfig?.forms.includes(currentForm) && !!reCaptchaConfig?.website_key) {
            setShouldLoad(true);
        }
    }, [currentForm, reCaptchaConfig, setShouldLoad]);

    // @ts-ignore
    globalThis.recaptchaCallbacks = globalThis.recaptchaCallbacks || {};

    // @ts-ignore
    if (!globalThis.recaptchaCallbacks) {
        // @ts-ignore
        globalThis['recaptchaCallbacks'] = {};
    }

    return {};
};

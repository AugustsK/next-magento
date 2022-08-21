import { useCallback, useEffect, useMemo } from 'react';

import { ReCaptchaFormEnum } from '@/types/objects';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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
    const { executeRecaptcha } = useGoogleReCaptcha();

    const enabled = useMemo(
        () => reCaptchaConfig?.forms.includes(currentForm) && !!reCaptchaConfig?.website_key,
        [reCaptchaConfig, currentForm]
    );

    const inlineBadge = enabled && reCaptchaConfig?.badge_position === 'inline';

    const getReCaptchaData = useCallback(
        async (inlineToken = '') => {
            if (enabled) {
                if (!executeRecaptcha) {
                    console.error('reCaptcha not yet available');

                    return {};
                }

                const token = inlineToken || (await executeRecaptcha(formAction));

                return {
                    context: {
                        headers: {
                            [GOOGLE_RECAPTCHA_HEADER]: token
                        }
                    }
                };
            }

            return {};
        },
        [enabled, formAction, executeRecaptcha]
    );

    useEffect(() => {
        if (enabled) {
            setShouldLoad(true);
        }
    }, [enabled, setShouldLoad]);

    return {
        getReCaptchaData,
        inlineBadge
    };
};

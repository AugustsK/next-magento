import React, { useCallback, useEffect, useState } from 'react';

import { SUBSCRIBE_STATUS } from '@/types/mutations/subscribeEmailToNewsletter';
import { ReCaptchaFormEnum } from '@/types/objects';

import { useMutation } from '@apollo/client';

import { subscribeEmailToNewsletterMutation } from '@/components/Framework/Newsletter/newsletter.gql';
import { useReCaptcha } from '@/hooks';

export const useNewsletter = () => {
    const [email, setEmail] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const { inlineBadge, getReCaptchaData } = useReCaptcha({
        formAction: 'newsletterSignup',
        currentForm: ReCaptchaFormEnum.NEWSLETTER
    });

    const [mutate, { data, loading, error }] = useMutation<{ subscribeEmailToNewsletter: { status: string } }>(
        subscribeEmailToNewsletterMutation
    );

    const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
        event => setEmail(event.currentTarget.value),
        [setEmail]
    );

    const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
        async event => {
            event.preventDefault();

            const recaptchaData = await getReCaptchaData(recaptchaToken);

            await mutate({
                variables: {
                    email
                },
                ...recaptchaData
            });
        },
        [email, getReCaptchaData, mutate, recaptchaToken]
    );

    const onRecaptchaVerify = useCallback(setRecaptchaToken, [setRecaptchaToken]);

    useEffect(() => {
        if (error) {
            alert(error);
        }
    }, [error]);

    useEffect(() => {
        if (data) {
            // TODO: once notification context is ready, switch to that
            switch (data.subscribeEmailToNewsletter.status) {
                case SUBSCRIBE_STATUS.UNCONFIRMED:
                case SUBSCRIBE_STATUS.NOT_ACTIVE:
                    alert(
                        'The subscription requires a confirmation. A confirmation email has been sent to specified email address to confirm the subscription.'
                    );

                    break;
                case SUBSCRIBE_STATUS.SUBSCRIBED:
                    alert('The email address is subscribed!');

                    break;
                case SUBSCRIBE_STATUS.UNSUBSCRIBED:
                    alert('The email address is unsubscribed!');

                    break;
            }
        }
    }, [data]);

    return {
        email,
        loading,
        inlineBadge,
        isSubmitted: !loading && data?.subscribeEmailToNewsletter.status === SUBSCRIBE_STATUS.SUBSCRIBED,
        onChange,
        onRecaptchaVerify,
        onSubmit
    };
};

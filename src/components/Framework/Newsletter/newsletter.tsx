import React from 'react';

import { GoogleReCaptcha } from 'react-google-recaptcha-v3';

import { shallowMerge } from '@/app/utils';
import Button, { ButtonSize, ButtonVisualType } from '@/components/Atoms/Button';
import { useUniqueId } from '@/hooks';

import { useNewsletter } from './useNewsletter';

import defaultClasses from './newsletter.module.css';

interface NewsletterProps {
    classes?: Partial<{
        heading: string;
        message: string;
        form: string;
        label: string;
        input: string;
        action: string;
        button: string;
    }>;
}

const Newsletter: React.FC<NewsletterProps> = props => {
    const classes = shallowMerge(defaultClasses, props.classes);
    const { id } = useUniqueId();
    const { email, loading, inlineBadge, isSubmitted, onChange, onRecaptchaVerify, onSubmit } = useNewsletter();

    return (
        <>
            <h3 className={classes.heading}>Subscribe to our newsletter</h3>
            <p className={classes.message}>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form onSubmit={onSubmit}>
                <div className={classes.form}>
                    <label htmlFor={id`email`} className={classes.label}>
                        Email address
                    </label>
                    <input
                        type="email"
                        name="email-address"
                        id={id`email`}
                        autoComplete="email"
                        required
                        className={classes.input}
                        placeholder="Enter your email"
                        disabled={loading}
                        value={email}
                        onChange={onChange}
                    />
                    <div className={classes.action}>
                        <Button
                            className={classes.button}
                            type="submit"
                            visualType={ButtonVisualType.primaryLighter}
                            disabled={loading || isSubmitted}
                            rounded={'rounded-md'}
                            size={ButtonSize.lg}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
                <div className="mt-4">{inlineBadge && <GoogleReCaptcha onVerify={onRecaptchaVerify} />}</div>
            </form>
        </>
    );
};

export default Newsletter;

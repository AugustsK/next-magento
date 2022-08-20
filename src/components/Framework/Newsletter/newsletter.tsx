import React from 'react';

import { shallowMerge } from '@/app/utils';
import { useUniqueId } from '@/hooks';

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

    return (
        <>
            <h3 className={classes.heading}>Subscribe to our newsletter</h3>
            <p className={classes.message}>The latest news, articles, and resources, sent to your inbox weekly.</p>
            <form className={classes.form} onSubmit={() => {}}>
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
                />
                <div className={classes.action}>
                    <button type="submit" className={classes.button}>
                        Subscribe
                    </button>
                </div>
            </form>
        </>
    );
};

export default Newsletter;

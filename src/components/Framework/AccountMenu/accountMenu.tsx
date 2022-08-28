import React from 'react';

import { shallowMerge } from '@/app/utils';
import { useSessionContext } from '@/context/sessionContext';

import defaultClasses from './accountMenu.module.css';

export interface AccountMenuProps {
    classes?: Partial<{
        link: string;
        separator: string;
    }>;
}

const AccountMenu: React.FC<AccountMenuProps> = props => {
    const classes = shallowMerge(defaultClasses, props.classes);
    const { isLoggedIn, logInSession, logOutSession } = useSessionContext();

    if (isLoggedIn) {
        return (
            <>
                <a
                    href="#"
                    className={classes.link}
                    onClick={() => {
                        logOutSession();
                    }}
                >
                    Log out
                </a>
            </>
        );
    }

    return (
        <>
            <a href="#" className={classes.link}>
                Create an account
            </a>
            <span className={classes.separator} aria-hidden={true} />
            <a
                href="#"
                className={classes.link}
                onClick={() => {
                    logInSession('mockToken');
                }}
            >
                Sign in
            </a>
        </>
    );
};

export default AccountMenu;

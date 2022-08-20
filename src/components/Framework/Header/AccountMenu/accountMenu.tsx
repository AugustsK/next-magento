import React from 'react';

import { shallowMerge } from '@/app/utils';

import defaultClasses from './accountMenu.module.css';

interface AccountMenuProps {
    classes?: Partial<{
        link: string;
        separator: string;
    }>;
}

const AccountMenu: React.FC<AccountMenuProps> = props => {
    const classes = shallowMerge(defaultClasses, props.classes);

    return (
        <>
            <a href="#" className={classes.link}>
                Create an account
            </a>
            <span className={classes.separator} aria-hidden={true} />
            <a href="#" className={classes.link}>
                Sign in
            </a>
        </>
    );
};

export default AccountMenu;

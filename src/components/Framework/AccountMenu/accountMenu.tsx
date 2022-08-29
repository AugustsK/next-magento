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
    const { logOutSession } = useSessionContext();

    return (
        <ul className={classes.root}>
            <li>Account</li>
            <li>Orders</li>
            <li className={classes.logout}>
                <button type="button" onClick={logOutSession}>
                    Log out
                </button>
            </li>
        </ul>
    );
};

export default AccountMenu;

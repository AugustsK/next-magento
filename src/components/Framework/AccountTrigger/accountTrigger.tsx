import React from 'react';

import { shallowMerge } from '@/app/utils';
import AccountMenu, { AccountMenuProps } from '@/components/Framework/AccountMenu';
import SignInMenu, { SignInMenuProps } from '@/components/Framework/SignInMenu';
import SignUpMenu, { SignUpMenuProps } from '@/components/Framework/SignUpMenu/signUpMenu';
import withDropdown from '@/components/WithDropdown';
import { useSessionContext } from '@/context/sessionContext';

import defaultClasses from './accountTrigger.module.css';

export interface AccountTriggerProps {
    classes?: Partial<{
        link: string;
        separator: string;
    }>;
}

const AccountTrigger: React.FC<AccountTriggerProps> = props => {
    const classes = shallowMerge(defaultClasses, props.classes);
    const { isLoggedIn } = useSessionContext();
    const AccountMenuDropdown = withDropdown<AccountMenuProps>(AccountMenu);
    const SignInDropdown = withDropdown<SignInMenuProps>(SignInMenu);
    const SignUpDropdown = withDropdown<SignUpMenuProps>(SignUpMenu);

    if (isLoggedIn) {
        return (
            <AccountMenuDropdown
                button={'Account'}
                dropdownClassName={'inline-block'}
                dropdownClasses={{ button: classes.link }}
            />
        );
    }

    return (
        <>
            <SignUpDropdown
                button={'Create an Account'}
                dropdownClassName={'inline-block'}
                dropdownClasses={{ button: classes.link }}
            />
            <span className={classes.separator} aria-hidden={true} />
            <SignInDropdown
                button={'Sign In'}
                dropdownClassName={'inline-block'}
                dropdownClasses={{ button: classes.link }}
            />
        </>
    );
};

export default AccountTrigger;

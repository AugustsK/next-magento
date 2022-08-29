import React from 'react';

import { shallowMerge } from '@/app/utils';

import defaultClasses from './signUpMenu.module.css';

export interface SignUpMenuProps {
    classes?: Partial<{
        link: string;
        separator: string;
    }>;
}

const SignUpMenu: React.FC<SignUpMenuProps> = props => {
    const classes = shallowMerge(defaultClasses, props.classes);

    return (
        <ul className={classes.root}>
            <li>Sign Un</li>
        </ul>
    );
};

export default SignUpMenu;

import React from 'react';

import { shallowMerge } from '@/app/utils';
import { Button, Field } from '@/components/Atoms';
import { useSignInMenu } from '@/components/Framework/SignInMenu/useSignInMenu';

import defaultClasses from './signInMenu.module.css';

export interface SignInMenuProps {
    classes?: Partial<{
        root: string;
    }>;
}

const SignInMenu: React.FC<SignInMenuProps> = props => {
    const classes = shallowMerge(defaultClasses, props.classes);
    const { handleSubmit } = useSignInMenu();

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <Field.Container label={'Email address'} name={'email'} type={'email'} />
            <Field.Container label={'Password'} name={'password'} type={'password'} />
            <Button type={'submit'}>Sign In</Button>
        </form>
    );
};

export default SignInMenu;

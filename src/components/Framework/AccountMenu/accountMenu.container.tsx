import React from 'react';

import { createClientOnlyComponent } from '@/app/utils';

import AccountMenu from './accountMenu';

const AccountMenuWrapper: React.FC<any> = () => {
    const WrappedAccountMenu = createClientOnlyComponent(AccountMenu);

    return <WrappedAccountMenu />;
};

export default AccountMenuWrapper;

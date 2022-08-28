import React from 'react';

import withCSR from '@/components/withCSR';

import AccountMenu, { AccountMenuProps } from './accountMenu';

const AccountMenuWrapper: React.FC<AccountMenuProps> = props => {
    const AccountMenuWithCSR = withCSR<AccountMenuProps>(AccountMenu);

    return <AccountMenuWithCSR {...props} />;
};

export default AccountMenuWrapper;

import React from 'react';

import withCSR from '@/components/withCSR';

import AccountMenu from './accountMenu';

const AccountMenuWrapper: React.FC = () => {
    const AccountMenuWithCSR = withCSR(AccountMenu);

    return <AccountMenuWithCSR />;
};

export default AccountMenuWrapper;

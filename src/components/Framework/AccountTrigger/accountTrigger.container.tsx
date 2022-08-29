import React from 'react';

import withCSR from '@/components/withCSR';

import AccountTrigger, { AccountTriggerProps } from './accountTrigger';

const AccountTriggerWrapper: React.FC<AccountTriggerProps> = props => {
    const AccountMenuWithCSR = withCSR<AccountTriggerProps>(AccountTrigger);

    return <AccountMenuWithCSR {...props} />;
};

export default AccountTriggerWrapper;

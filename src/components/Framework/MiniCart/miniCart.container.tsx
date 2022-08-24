import React from 'react';

import withCSR from '@/components/withCSR';

import MiniCart from './miniCart';

const MiniCartWrapper: React.FC = () => {
    const MiniCartWithCSR = withCSR(MiniCart);

    return <MiniCartWithCSR />;
};

export default MiniCartWrapper;

import React from 'react';

import { createClientOnlyComponent } from '@/app/utils';

import MiniCart from './miniCart';

const MiniCartWrapper: React.FC<any> = () => {
    const WrappedMiniCart = createClientOnlyComponent(MiniCart);

    return <WrappedMiniCart />;
};

export default MiniCartWrapper;

import React from 'react';

import type { LayoutProps } from '@/types';

const CheckoutLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <h1>Checkout Header</h1>
            </header>
            <section>{children}</section>
            <footer>
                <h2>Checkout Footer</h2>
            </footer>
        </>
    );
};

export default CheckoutLayout;

import type { LayoutProps } from "@types";

import React from "react";

const CheckoutLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <header>
                <h1>Checkout Header</h1>
            </header>
            <section>
                {children}
            </section>
            <footer>
                <h2>Checkout Footer</h2>
            </footer>
        </>
    )
}

export default CheckoutLayout;

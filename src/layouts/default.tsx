import type { LayoutProps } from "@types";

import React from "react";
import Header from '@/components/Header';

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <footer>
                <h2>Footer</h2>
            </footer>
        </>
    )
}

export default DefaultLayout;

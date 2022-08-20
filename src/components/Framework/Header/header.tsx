import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { shallowMerge } from '@/app/utils';
import MegaMenu from '@/components/Framework/Header/MegaMenu';
import { useStoreDataContext } from '@/context/storeData';

import AccountMenu from './AccountMenu';
import MiniCart from './MiniCart';

import defaultClasses from './header.module.css';

interface HeaderProps {
    classes?: Partial<{
        root: string;
        topBar: string;
        topBarInner: string;
        topLeft: string;
        topCenter: string;
        topRight: string;
        mainBar: string;
        mainBarInner: string;
        container: string;
        logoContainer: string;
        secondaryMenu: string;
    }>;
}

const Header: React.FC<HeaderProps> = props => {
    const { classes: propClasses } = props;
    const { storeConfig } = useStoreDataContext();
    const classes = shallowMerge(defaultClasses, propClasses);

    return (
        <header className={classes.root}>
            <div className={classes.topBar}>
                <div className={classes.topBarInner}>
                    <div className={classes.topLeft}></div>
                    <p className={classes.topCenter}>{storeConfig?.welcome}</p>
                    <div className={classes.topRight}>
                        <AccountMenu />
                    </div>
                </div>
            </div>
            <div className={classes.mainBar}>
                <div className={classes.mainBarInner}>
                    <div className={classes.container}>
                        <div className={classes.logoContainer}>
                            <Link href="/">
                                <a>
                                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                                </a>
                            </Link>
                        </div>
                        <MegaMenu />
                        <div className={classes.secondaryMenu}>
                            <MiniCart />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

import React from "react";
import AccountMenu from './AccountMenu';
import MiniCart from './MiniCart';
import MegaMenu from "@/components/Framework/Header/MegaMenu";
import {CategoryTreeObject, StoreConfigObject} from "@/types/objects";
import { shallowMerge } from "@/app/utils";
import Link from "next/link";
import Image from 'next/image'

import defaultClasses from './header.module.css';

interface HeaderProps {
    megaMenu?: CategoryTreeObject[]
    storeConfig?: StoreConfigObject
    classes?: {
        root?: string
        topBar?: string
        topBarInner?: string
        topLeft?: string
        topCenter?: string
        topRight?: string
        mainBar?: string
        mainBarInner?: string
        containerWrapper?: string
        container?: string
        logoContainer?: string
        secondaryMenu?: string
    }
}

const Header: React.FC<HeaderProps> = props => {
    const { classes: propClasses, megaMenu, storeConfig } = props;
    const classes = shallowMerge(defaultClasses, propClasses);

    return (
        <header className={classes.root}>
            <div className={classes.topBar}>
                <div className={classes.topBarInner}>
                    <div className={classes.topLeft}>

                    </div>
                    <p className={classes.topCenter}>
                        {storeConfig?.welcome}
                    </p>
                    <div className={classes.topRight}>
                        <AccountMenu />
                    </div>
                </div>
            </div>
            <div className={classes.mainBar}>
                <div className={classes.mainBarInner}>
                    <div className={classes.containerWrapper}>
                        <div className={classes.container}>
                            <div className={classes.logoContainer}>
                                <Link href='/'>
                                    <a>
                                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                                    </a>
                                </Link>
                            </div>
                            <MegaMenu storeConfig={storeConfig} megaMenu={megaMenu} />
                            <div className={classes.secondaryMenu}>
                                <MiniCart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
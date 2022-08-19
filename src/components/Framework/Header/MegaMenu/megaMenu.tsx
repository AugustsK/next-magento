import React, { forwardRef } from "react";
import Link from "next/link";
import {CategoryTreeObject, StoreConfigObject} from "@/types/objects";
import { shallowMerge } from "@/app/utils";

import defaultClasses from './megaMenu.module.css';

interface MegaMenuProps {
    megaMenu?: CategoryTreeObject[]
    storeConfig?: StoreConfigObject
    classes?: {
        root?: string
        inner?: string
        menu?: string
        link?: string
    }
}

const MegaMenu: React.FC<MegaMenuProps> = ({ classes: propClasses, storeConfig, megaMenu }) => {
    const classes = shallowMerge(defaultClasses, propClasses);

    const rootCategory = megaMenu?.find(category => category.uid === storeConfig?.root_category_uid);

    if (!rootCategory || rootCategory?.children?.length === 0) {
        return null;
    }

    return (
        <nav className={classes.root}>
            <div className={classes.inner}>
                <div className={classes.menu}>
                    {rootCategory?.children?.map((item) => (
                        <Link key={item.uid} href={item.url_path || ''} passHref>
                            <a className={classes.link}>
                                {item.name}
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default MegaMenu;
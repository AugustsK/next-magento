import React from 'react';

import Link from 'next/link';

import { shallowMerge } from '@/app/utils';
import Submenu from '@/components/Framework/Header/MegaMenu/Submenu';
import { useStoreDataContext } from '@/context/storeData';
import { useMagentoUrl } from '@/hooks';

import defaultClasses from './megaMenu.module.css';

interface MegaMenuProps {
    classes?: Partial<{
        root: string;
        link: string;
        anchor: string;
        dropdown: string;
    }>;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ classes: propClasses }) => {
    const classes = shallowMerge(defaultClasses, propClasses);
    const { megaMenu, storeConfig } = useStoreDataContext();
    const rootCategory = megaMenu?.find(category => category.uid === storeConfig?.root_category_uid);
    const { makeCategoryUrl } = useMagentoUrl();

    if (!rootCategory || rootCategory?.children?.length === 0) {
        return null;
    }

    return (
        <nav className={classes.root}>
            {rootCategory?.children?.map(item => (
                <div key={item.uid} className={classes.link}>
                    <Link key={item.uid} href={makeCategoryUrl(item)} passHref>
                        <a className={classes.anchor}>{item.name}</a>
                    </Link>
                    {(item?.children?.length || 0) > 0 && (
                        <div className={classes.dropdown}>
                            <Submenu item={item} />
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default MegaMenu;

import React, { useCallback, useState, useTransition } from 'react';

import Link from 'next/link';

import { classNames, shallowMerge } from '@/app/utils';
import Submenu from '@/components/Framework/Submenu';
import { useStoreDataContext } from '@/context/storeData';
import { useMagentoUrl } from '@/hooks';

import defaultClasses from './megaMenu.module.css';

interface MegaMenuProps {
    classes?: Partial<{
        root: string;
        link: string;
        anchor: string;
        dropdown: string;
        hideDropdown: string;
    }>;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ classes: propClasses }) => {
    const classes = shallowMerge(defaultClasses, propClasses);
    const { megaMenu = [] } = useStoreDataContext();
    const { makeCategoryUrl } = useMagentoUrl();
    const [, startTransition] = useTransition();
    const [blockHover, setBlockHover] = useState(false);

    const onMouseLeave = useCallback(() => setBlockHover(false), [setBlockHover]);
    const onClick = useCallback(() => {
        startTransition(() => {
            setBlockHover(true);
        });
    }, [startTransition, setBlockHover]);

    return (
        <nav className={classes.root}>
            {megaMenu.map(item => (
                <div key={item.uid} className={classes.link} onClick={onClick} onMouseLeave={onMouseLeave}>
                    <Link key={item.uid} href={makeCategoryUrl(item)} passHref>
                        <a className={classes.anchor}>{item.name}</a>
                    </Link>
                    {(item?.children?.length || 0) > 0 && (
                        <div className={classNames(classes.dropdown, blockHover ? classes.hideDropdown : false)}>
                            <Submenu item={item} />
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
};

export default MegaMenu;

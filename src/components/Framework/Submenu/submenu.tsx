import React from 'react';

import { CategoryTreeObject } from '@/types/objects';

import Link from 'next/link';

import { shallowMerge } from '@/app/utils';
import { useMagentoUrl } from '@/hooks';
import { useUniqueId } from '@/hooks';

import defaultClasses from './submenu.module.css';

interface SubmenuProps {
    item: Partial<CategoryTreeObject>;
    classes?: Partial<{
        root: string;
        shadow: string;
        inner: string;
        heading: string;
        list: string;
        item: string;
        anchor: string;
    }>;
}

const Submenu: React.FC<SubmenuProps> = ({ item, classes: propClasses }) => {
    const classes = shallowMerge(defaultClasses, propClasses);
    const { makeCategoryUrl } = useMagentoUrl();
    const { id } = useUniqueId();

    return (
        <>
            <div className={classes.shadow} aria-hidden={true} />
            <div className={classes.root}>
                <div className={classes.inner}>
                    {item?.children?.map(column => (
                        <div key={column.uid}>
                            <Link href={makeCategoryUrl(column)} passHref>
                                <a className={classes.heading} id={id`column--${column.uid}`}>
                                    {column.name}
                                </a>
                            </Link>
                            {(column?.children?.length || 0) > 0 && (
                                <ul className={classes.list} role="list" aria-labelledby={id`column--${column.uid}`}>
                                    {column?.children?.map(columnItem => (
                                        <li key={columnItem.uid} className={classes.item}>
                                            <Link href={makeCategoryUrl(columnItem)} passHref>
                                                <a className={classes.anchor}>{columnItem.name}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Submenu;

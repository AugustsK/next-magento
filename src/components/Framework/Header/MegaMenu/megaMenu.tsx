import React, { Fragment } from 'react';

import { CategoryTreeObject, StoreConfigObject } from '@/types/objects';

import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';

import { shallowMerge } from '@/app/utils';
import { getUrl } from '@/components/Framework/Header/MegaMenu/util/getUrl';

import defaultClasses from './megaMenu.module.css';

interface MegaMenuProps {
    megaMenu: Partial<CategoryTreeObject>[];
    storeConfig: Partial<StoreConfigObject>;
    classes?: Partial<{
        root: string;
        inner: string;
        menu: string;
        link: string;
        dropdown: string;
    }>;
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
                    {rootCategory?.children?.map(item => (
                        <Link key={item.uid} href={getUrl(storeConfig, item)} passHref>
                            <a className={classes.link}>{item.name}</a>
                        </Link>
                    ))}
                    {/*{rootCategory?.children?.map(item => (*/}
                    {/*    <Menu key={item.uid} as={Fragment}>*/}
                    {/*        <Link href={item.url_path || ''} passHref>*/}
                    {/*            <Menu.Button as="a" className={classes.link}>*/}
                    {/*                {item.name}*/}
                    {/*            </Menu.Button>*/}
                    {/*        </Link>*/}
                    {/*        <Transition*/}
                    {/*            as={Fragment}*/}
                    {/*            enter="transition ease-out duration-100"*/}
                    {/*            enterFrom="transform opacity-0 scale-95"*/}
                    {/*            enterTo="transform opacity-100 scale-100"*/}
                    {/*            leave="transition ease-in duration-75"*/}
                    {/*            leaveFrom="transform opacity-100 scale-100"*/}
                    {/*            leaveTo="transform opacity-0 scale-95"*/}
                    {/*        >*/}
                    {/*            <Menu.Items className={classes.dropdown}>*/}

                    {/*            </Menu.Items>*/}
                    {/*        </Transition>*/}
                    {/*    </Menu>*/}
                    {/*))}*/}
                </div>
            </div>
        </nav>
    );
};

export default MegaMenu;

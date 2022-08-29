import React, { ComponentType, Fragment, ReactNode } from 'react';

import { Menu, Transition } from '@headlessui/react';

import { classNames, shallowMerge } from '@/utils';

import defaultClasses from './withDropdown.module.css';

interface WithDropdownProps {
    button: ReactNode;
    dropdownClassName?: string;
    dropdownClasses?: Partial<{
        root: string;
        button: string;
        dropdown: string;
    }>;
}

export default function withDropdown<T>(Component: ComponentType<T>) {
    const DropdownComponent = (props: T & WithDropdownProps) => {
        const { button, dropdownClassName = '', dropdownClasses, ...rest } = props;
        const classes = shallowMerge(defaultClasses, dropdownClasses);

        return (
            <Menu as={'div'} className={classNames(dropdownClassName, classes.root)}>
                <Menu.Button className={classes.button}>{button}</Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className={classes.dropdown}>
                        <Component {...(rest as unknown as T)} />
                    </Menu.Items>
                </Transition>
            </Menu>
        );
    };

    DropdownComponent.displayName = 'Dropdown';

    return DropdownComponent;
}

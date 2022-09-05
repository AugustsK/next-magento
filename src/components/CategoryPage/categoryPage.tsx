import React, { Fragment, useState } from 'react';

import { CategoryRouteObject } from '@/types/objects/categoryRouteObject';

import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, FilterIcon, StarIcon } from '@heroicons/react/solid';
import Link from 'next/link';

import RichContent from '@/components/RichContent';
import { useUniqueId } from '@/hooks';
import { useMagentoUrl } from '@/hooks';
import { classNames, shallowMerge } from '@/utils';

import defaultClasses from './categoryPage.module.css';

// TODO: to change to gql endpoint
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false }
];

interface CategoryPageProps {
    route: CategoryRouteObject;
    classes?: Partial<{
        root: string;
        header: string;
        title: string;
        description: string;
        toolbar: string;
        filterRow: string;
        filterRowInner: string;
        filterToggle: string;
        filterIcon: string;
        clearAllWrapper: string;
        clearAll: string;
        filterWrapper: string;
        sortRow: string;
        sortRowInner: string;
        sortDropdownWrapper: string;
        sortAction: string;
        sortButton: string;
        sortIcon: string;
        sortDropdown: string;
        sortOptions: string;
        sortOption: string;
        products: string;
        grid: string;
        product: string;
        imageWrapper: string;
        image: string;
        productDetails: string;
        productName: string;
        ratingsWrapper: string;
        stars: string;
        star: string;
        ratingSummary: string;
        price: string;
    }>;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ route, classes: propClasses }) => {
    const classes = shallowMerge(defaultClasses, propClasses);
    const { id } = useUniqueId();
    const [filtersOpen, setFilersOpen] = useState(false);
    const { makeProductUrl } = useMagentoUrl();

    const priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: process.env.NEXT_PUBLIC_STORE_VIEW_CURRENCY,
        maximumFractionDigits: 2
    });

    return (
        <article className={classes.root}>
            <header className={classes.header}>
                <h1 className={classes.title}>{route.name}</h1>
                <div className={classes.description}>
                    <RichContent html={route.description || ''} />
                </div>
            </header>
            <section className={classes.toolbar} aria-labelledby={id`filter`}>
                <h2 className="sr-only" id={id`filter`}>
                    Filters
                </h2>
                <div className={classes.filterRow}>
                    <div className={classes.filterRowInner}>
                        <div>
                            <button
                                type="button"
                                className={classes.filterToggle}
                                aria-controls={id`filterContent`}
                                aria-expanded={filtersOpen}
                                onClick={() => setFilersOpen(!filtersOpen)}
                            >
                                <FilterIcon className={classes.filterIcon} aria-hidden={true} />2 Filters
                            </button>
                        </div>
                        <div className={classes.clearAllWrapper}>
                            <button type="button" className={classes.clearAll}>
                                Clear all
                            </button>
                        </div>
                    </div>
                </div>
                <div className={filtersOpen ? classes.filterWrapper : 'hidden'} id={id`filterContent`} />
                <div className={classes.sortRow}>
                    <div className={classes.sortRowInner}>
                        <Menu as={'div'} className={classes.sortDropdownWrapper}>
                            <div className={classes.sortAction}>
                                <Menu.Button className={classes.sortButton}>
                                    Sort
                                    <ChevronDownIcon className={classes.sortIcon} aria-hidden={true} />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className={classes.sortDropdown}>
                                    <div className={classes.sortOptions}>
                                        {sortOptions.map(option => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current
                                                                ? 'font-medium text-gray-900'
                                                                : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            classes.sortOption
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </section>
            <section aria-labelledby={id`products`} className={classes.products}>
                <h2 id={id`products`} className="sr-only">
                    Products
                </h2>
                <div className={classes.grid}>
                    {route?.products?.items?.map(product => (
                        <div key={product.uid} className={classes.product}>
                            <div className={classes.imageWrapper}>
                                <picture>
                                    <img
                                        src={product?.image?.url}
                                        alt={product?.image?.label}
                                        className={classes.image}
                                        loading="lazy"
                                    />
                                </picture>
                            </div>
                            <div className={classes.productDetails}>
                                <h3 className={classes.productName}>
                                    <Link href={makeProductUrl(product)}>
                                        <a>
                                            <span aria-hidden={true} className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </Link>
                                </h3>
                                <div className={classes.ratingsWrapper}>
                                    <p className="sr-only">{product.rating_summary} out of 5 stars</p>
                                    <div className={classes.stars}>
                                        {[0, 1, 2, 3, 4].map(rating => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    (product?.rating_summary || 0) > rating
                                                        ? 'text-yellow-400'
                                                        : 'text-gray-200',
                                                    classes.star
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className={classes.ratingSummary}>{product.review_count} reviews</p>
                                </div>
                                <p className={classes.price}>
                                    {priceFormat.format(product.price_range?.minimum_price?.final_price?.value || 0)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
};

export default CategoryPage;

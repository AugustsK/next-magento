import React from 'react';

import { RouteObject } from '@/types/objects';

import { shallowMerge } from '@/utils';

import defaultClasses from './productPage.module.css';

interface ProductPageProps {
    route: Partial<RouteObject>;
    classes?: Partial<{
        root: string;
    }>;
}

const ProductPage: React.FC<ProductPageProps> = ({ route, classes: propClasses }) => {
    const classes = shallowMerge(defaultClasses, propClasses);

    return (
        <div className={classes.root}>
            <h1>Product Page</h1>
            <pre>{JSON.stringify(route, null, 2)}</pre>
        </div>
    );
};

export default ProductPage;

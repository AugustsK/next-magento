import React from 'react';

import { RouteObject } from '@/types/objects';

import { shallowMerge } from '@/utils';

import defaultClasses from './categoryPage.module.css';

interface CategoryPageProps {
    route: Partial<RouteObject>;
    classes?: Partial<{
        root: string;
    }>;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ route, classes: propClasses }) => {
    const classes = shallowMerge(defaultClasses, propClasses);

    return (
        <div className={classes.root}>
            <h1>Category Page</h1>
            <pre>{JSON.stringify(route, null, 2)}</pre>
        </div>
    );
};

export default CategoryPage;

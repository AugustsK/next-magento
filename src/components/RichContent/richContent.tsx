import React from 'react';

import PageBuilder from '@next-magento/pagebuilder';

import { shallowMerge } from '@/app/utils';

import defaultClasses from './richContent.module.css';

interface RichContentProps {
    html: string;
    classes?: Partial<{
        root: string;
    }>;
}

const RichContent: React.FC<RichContentProps> = ({ html, classes: propClasses }) => {
    const classes = shallowMerge(defaultClasses, propClasses);

    return (
        <div className={classes.root}>
            <PageBuilder html={html} />
        </div>
    );
};

export default RichContent;

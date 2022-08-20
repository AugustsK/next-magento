import React from 'react';

import PageBuilder from '@magento/pagebuilder/lib/pagebuilder';

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

    return <div dangerouslySetInnerHTML={{ __html: html }} className={classes.root} />;
};

export default RichContent;

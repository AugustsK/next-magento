import React from 'react';

import { classNames, shallowMerge } from '@/utils';

import defaultClasses from './label.module.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    classes?: Partial<{
        root: string;
    }>;
}

const Label: React.FC<LabelProps> = props => {
    const { children, className = '', classes: propClasses } = props;
    const classes = shallowMerge(defaultClasses, propClasses);

    return <label className={classNames(className, classes.root)}>{children}</label>;
};

export default Label;

import React from 'react';

import FieldContainer, { FieldContainerProps } from '@/components/Atoms/Field/field.container';
import { classNames, shallowMerge } from '@/utils';

import defaultClasses from './field.module.css';

export interface FieldProps extends React.HTMLAttributes<HTMLElement> {
    label: JSX.Element | string;
    input: JSX.Element | string;
    classes?: Partial<{
        root: string;
        inputWrapper: string;
    }>;
}

interface IField {
    Container: React.FC<FieldContainerProps>;
}

const Field: React.FC<FieldProps> & IField = props => {
    const { className = '', classes: propClasses, input, label } = props;
    const classes = shallowMerge(defaultClasses, propClasses);

    return (
        <div className={classNames(className, classes.root)}>
            {label}
            <div className={classes.inputWrapper}>{input}</div>
        </div>
    );
};

Field.Container = FieldContainer;

export default Field;

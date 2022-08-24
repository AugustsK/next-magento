import React, { ReactNode } from 'react';

import { classNames, shallowMerge } from '@/utils';

import defaultClasses from './button.module.css';

export const ButtonVisualType = {
    primary: 'primary' as const,
    primaryLighter: 'primary-lighter' as const,
    secondary: 'secondary' as const,
    tertiary: 'tertiary' as const
};

export const ButtonSize = {
    xs: 'xs' as const,
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const,
    xl: 'xl' as const
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    visualType?: 'primary' | 'primary-lighter' | 'secondary' | 'tertiary';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    rounded?: boolean | string;
    classes?: Partial<{
        root: string;
        type_primary: string;
        type_secondary: string;
        type_tertiary: string;
        size_xs: string;
        size_sm: string;
        size_md: string;
        size_lg: string;
        size_xl: string;
        rounded: string;
        leadingIcon_xs: string;
        leadingIcon_sm: string;
        leadingIcon_md: string;
        leadingIcon_lg: string;
        leadingIcon_xl: string;
        trailingIcon_xs: string;
        trailingIcon_sm: string;
        trailingIcon_md: string;
        trailingIcon_lg: string;
        trailingIcon_xl: string;
    }>;
}

const Button: React.FC<ButtonProps> = props => {
    const { children, className, size, visualType, rounded, ...rest } = props;
    const classes = shallowMerge(defaultClasses, props.classes);
    const roundedClassname = typeof rounded === 'string' ? rounded : !!rounded ? 'rounded-full' : 'rounded';

    return (
        <button
            className={classNames(
                className || false,
                classes.root,
                classes[`type_${visualType}`] || false,
                classes[`size_${size}`] || false,
                roundedClassname
            )}
            {...rest}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    visualType: ButtonVisualType.primary,
    size: ButtonSize.md,
    type: 'button',
    rounded: false
};

export default Button;

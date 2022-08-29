import React from 'react';

import { useTextInput } from '@/components/Atoms/TextInput/useTextInput';
import { classNames, shallowMerge } from '@/utils';

import defaultClasses from './textInput.module.css';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    classes?: Partial<{
        root: string;
    }>;
}

const TextInput: React.FC<TextInputProps> = props => {
    const {
        className = '',
        type = 'text',
        value: propValue,
        onChange: propOnChange,
        classes: propClasses,
        ...rest
    } = props;
    const classes = shallowMerge(defaultClasses, propClasses);
    const { value, onChange } = useTextInput({
        value: propValue,
        onChange: propOnChange
    });

    return (
        <input
            className={classNames(className, classes.root)}
            value={value}
            type={type}
            onChange={onChange}
            {...rest}
        />
    );
};

export default TextInput;

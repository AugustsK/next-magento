import React, { ReactNode, useMemo } from 'react';

import { Label, TextInput } from '@/components/Atoms';
import { useUniqueId } from '@/hooks';

import Field from './field';

export interface FieldContainerProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: ReactNode;
}

const Container: React.FC<FieldContainerProps> = props => {
    const { label: labelProp, name, ...rest } = props;
    const { id } = useUniqueId();

    const label = useMemo(() => <Label htmlFor={id(name)}>{labelProp}</Label>, [labelProp, name, id]);
    const input = useMemo(() => <TextInput id={id(name)} name={name} {...rest} />, [name, id, rest]);

    return <Field label={label} input={input} />;
};

export default Container;

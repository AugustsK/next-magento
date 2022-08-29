import React, { useCallback, useEffect, useRef, useState } from 'react';

export interface UseTextInputProps {
    value?: string | number | readonly string[];
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const useTextInput = (props: UseTextInputProps) => {
    const { value = '', onChange } = props;
    const [stateValue, setStateValue] = useState<string | number | readonly string[]>('');
    const prevValue = useRef<string | number | readonly string[]>('');

    const handleOnChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setStateValue(event.currentTarget.value);

            if (typeof onChange === 'function') {
                onChange(event);
            }
        },
        [onChange, setStateValue]
    );

    useEffect(() => {
        if (prevValue.current !== value) {
            setStateValue(value);
            prevValue.current = value;
        }
    }, [value, setStateValue]);

    return {
        value: stateValue,
        onChange: handleOnChange
    };
};

import { useCallback, useId } from 'react';

export const useUniqueId = () => {
    const uniqueId = useId();

    const makeId = useCallback((name: string) => `${uniqueId}-${name}`, [uniqueId]);

    const id = useCallback(
        (literals: string | readonly string[], ...args: string[]) => {
            if (typeof literals === 'string') {
                literals = [literals];
            }

            let result = literals[0];

            args.forEach((arg, i) => {
                result += arg;
                result += literals[i + 1];
            });

            return `${uniqueId}-${result}`;
        },
        [uniqueId]
    );

    return {
        id,
        makeId
    };
};

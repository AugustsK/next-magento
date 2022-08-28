import { useEffect, useState } from 'react';

export const useAsyncEffect = <T>(asyncFn: () => Promise<T>) => {
    const [result, setResult] = useState<T | null>(null);

    useEffect(() => {
        async function execute() {
            return await asyncFn();
        }

        let active = true;
        execute().then(result => {
            if (active) {
                setResult(result);
            }
        });

        return () => {
            active = false;
        };
    });

    return result;
};

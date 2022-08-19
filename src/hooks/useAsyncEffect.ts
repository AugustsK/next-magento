import { useEffect, useState } from "react";

export const useAsyncEffect = (asyncFn: () => Promise<any>) => {
    const [result, setResult] = useState(null);

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

        return () => { active = false }
    });

    return result
}
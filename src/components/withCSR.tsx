import React, { ComponentType, useEffect, useState } from 'react';

export default function withCSR<T>(Component: ComponentType<T>) {
    const CSRComponent = (props: T) => {
        const [hasMounted, setHasMounted] = useState(false);

        useEffect(() => {
            setHasMounted(true);

            return () => {
                setHasMounted(false);
            };
        }, [setHasMounted]);

        if (!hasMounted) {
            return null;
        }

        return <Component {...props} />;
    };

    CSRComponent.displayName = 'CSRComponent';

    return CSRComponent;
}

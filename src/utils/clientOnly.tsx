import React, { useEffect, useState } from "react";

type ClientOnlyComponentProps = {
    children?: JSX.Element
}

const clientOnly = (Component: React.FC<any>) => function ClientOnlyComponent({ children, ...delegated }: ClientOnlyComponentProps) {
    const [ hasMounted, setHasMounted ] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        return () => {
            setHasMounted(false);
        }
    }, [setHasMounted]);

    if (!hasMounted) {
        return null;
    }

    return (
        <Component {...delegated}>{children}</Component>
    );
}

export default clientOnly;

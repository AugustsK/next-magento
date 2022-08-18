import React, { useEffect, useState } from "react";

type ClientOnlyComponentProps = {
    children?: JSX.Element
}

/* eslint-disable-next-line */
const clientOnly = (WrappableComponent: React.FC<any>) => ({ children, ...delegated }: ClientOnlyComponentProps) => {
    const [ hasMounted, setHasMounted ] = useState(false);

    console.log(WrappableComponent.displayName)

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
        <WrappableComponent {...delegated}>{children}</WrappableComponent>
    );
}

export default clientOnly;

import React from 'react';

import { usePageBuilder } from "./usePageBuilder";

interface PageBuilderProps {
    html: string
}

const PageBuilder: React.FC<PageBuilderProps> = ({ html }) => {
    const componentConfig = usePageBuilder({ html });

    console.log({componentConfig})

    return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default PageBuilder;

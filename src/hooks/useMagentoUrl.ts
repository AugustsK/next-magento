import { useCallback } from 'react';

import { CategoryInterface, ProductInterface } from '@/types/interfaces';

import { useStoreDataContext } from '@/context/storeData';

export const useMagentoUrl = () => {
    const { storeConfig } = useStoreDataContext();

    const makeCategoryUrl = useCallback(
        (item: Partial<CategoryInterface>) => `/${item.url_path}${storeConfig.category_url_suffix || ''}`,
        [storeConfig]
    );

    const makeProductUrl = useCallback(
        (item: Partial<ProductInterface>) => `/${item.canonical_url}${storeConfig.product_url_suffix || ''}`,
        [storeConfig]
    );

    return {
        makeCategoryUrl,
        makeProductUrl
    };
};

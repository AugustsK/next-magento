import { CategoryInterface } from '@/types/interfaces';
import { StoreConfigObject } from '@/types/objects';

export const getUrl = (storeConfig: Partial<StoreConfigObject>, item: Partial<CategoryInterface>) =>
    `/${item.url_path}${storeConfig.category_url_suffix || ''}`;

import { CategoryTreeObject, StoreConfigObject } from '@/types/objects';

export interface SharedPageData {
    storeConfig: Partial<StoreConfigObject>;
    megaMenu: Partial<CategoryTreeObject>[];
}

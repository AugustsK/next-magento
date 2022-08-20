import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/types/objects';

export interface SharedPageData {
    storeConfig: Partial<StoreConfigObject>;
    reCaptchaConfig: Partial<RecaptchaConfigObject>;
    megaMenu: Partial<CategoryTreeObject>[];
}

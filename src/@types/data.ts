import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/app/@types/objects';

export interface SharedPageData {
    storeConfig: Partial<StoreConfigObject>;
    reCaptchaConfig: Partial<RecaptchaConfigObject>;
    megaMenu: Partial<CategoryTreeObject>[];
}

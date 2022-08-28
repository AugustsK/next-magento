import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/app/@types/objects';

export interface SharedPageData {
    storeConfig: StoreConfigObject;
    reCaptchaConfig: RecaptchaConfigObject;
    megaMenu: CategoryTreeObject[];
}

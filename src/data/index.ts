import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/types/objects';

import createClient from '@/app/apollo/client';

import getMegaMenu from './dataProviders/megaMenu';
import getRecaptchaConfig from './dataProviders/reCaptchaConfig';
import getStoreConfig from './dataProviders/storeConfig';

const client = createClient();

export { client };

interface IResult {
    megaMenu: CategoryTreeObject[];
    reCaptchaConfig: RecaptchaConfigObject;
    storeConfig: StoreConfigObject;
}

export default async function getPageData() {
    const configPromise = getStoreConfig(client);
    const recaptchaPromise = getRecaptchaConfig(client);
    const storeConfig = await configPromise;
    const megaMenu = await getMegaMenu(client, storeConfig.root_category_uid);

    const result: IResult = {
        megaMenu,
        reCaptchaConfig: await recaptchaPromise,
        storeConfig
    };

    return result;
}

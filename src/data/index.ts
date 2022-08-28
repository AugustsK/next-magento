import { CategoryTreeObject, RecaptchaConfigObject, StoreConfigObject } from '@/types/objects';

import createClient from '@/app/apollo/client';
import providers from '@/app/data/dataProviders';

const client = createClient();

export { client };

interface IResult {
    megaMenu: CategoryTreeObject[];
    reCaptchaConfig: RecaptchaConfigObject;
    storeConfig: StoreConfigObject;
}

export default async function getPageData() {
    const promises = providers.map(provider => provider(client));
    const config = await Promise.all(promises);
    const result: Partial<IResult> = {};

    config.forEach(([key, data]) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        result[key] = data;
    });

    return result as IResult;
}

import createClient from '@/app/apollo/client';
import providers from '@/app/data/dataProviders';

const client = createClient();

export { client };

export default async function getPageData() {
    const promises = providers.map(provider => provider(client));
    const config = await Promise.all(promises);
    const result: any = {};

    config.forEach(([key, data]) => {
        result[key] = data;
    });

    return result;
}

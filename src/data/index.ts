import { SharedPageData } from "@/types";
import createClient from '@/app/apollo/client';
import providers from "@/app/data/dataProviders";

export default async function getPageData() {
    const client = createClient();
    const promises = providers.map(provider => provider(client));
    const config = await Promise.all(promises);
    const result: SharedPageData = {};

    config.forEach(([key, data]) => {
        result[key] = data
    });

    return result;
}
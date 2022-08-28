import { RecaptchaConfigObject } from '@/types/objects';
import { RecaptchaConfigQuery } from '@/types/queries';

import { ApolloClient, ApolloQueryResult, NormalizedCacheObject } from '@apollo/client';

import { getReCaptchaConfig } from '@/queries';

type ReCaptchaConfigKey = 'reCaptchaConfig';

export default async function reCaptchaConfig(
    client: ApolloClient<NormalizedCacheObject>
): Promise<[ReCaptchaConfigKey, RecaptchaConfigObject]> {
    const { data }: ApolloQueryResult<RecaptchaConfigQuery> = await client.query({
        query: getReCaptchaConfig,
        fetchPolicy: 'network-only'
    });

    return ['reCaptchaConfig' as const, data.recaptchaV3Config];
}

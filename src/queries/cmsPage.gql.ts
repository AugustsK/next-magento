import { gql } from '@apollo/client';

import { CmsPageFragment } from '@/queries/fragments/cmsPage.gql';

export const getCmsPage = gql`
    query getCmsPage($identifier: String!) {
        cmsPage(identifier: $identifier) {
            ...CmsPageFragment
        }
    }
    ${CmsPageFragment}
`;

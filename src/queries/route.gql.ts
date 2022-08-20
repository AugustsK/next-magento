import { gql } from '@apollo/client';

import { CmsPageFragment } from '@/queries/fragments/cmsPage.gql';
import { ProductFragment } from '@/queries/fragments/product.gql';

export const getRoute = gql`
    query getRoute($url: String!) {
        route(url: $url) {
            relative_url
            redirect_code
            type
            ... on CmsPage {
                content
            }
            ... on CategoryTree {
                name
                product_count
                meta_title
                meta_description
                meta_keywords
            }
        }
    }
`;

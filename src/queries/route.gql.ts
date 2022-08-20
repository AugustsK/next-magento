import { gql } from '@apollo/client';

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

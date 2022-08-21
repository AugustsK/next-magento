import { gql } from '@apollo/client';

export const getRoute = gql`
    query getRoute($url: String!, $currentPage: Int, $pageSize: Int, $productSort: ProductAttributeSortInput) {
        route(url: $url) {
            relative_url
            redirect_code
            type
            ... on CmsPage {
                content
            }
            ... on CategoryTree {
                name
                products(currentPage: $currentPage, pageSize: $pageSize, sort: $productSort) {
                    items {
                        image {
                            url
                            label
                        }
                        price_range {
                            minimum_price {
                                final_price {
                                    currency
                                    value
                                }
                            }
                        }
                        name
                        review_count
                        rating_summary
                    }
                }
                meta_title
                meta_description
                meta_keywords
            }
        }
    }
`;

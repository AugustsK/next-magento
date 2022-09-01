import { gql } from '@apollo/client';

import { ConfigurableProductFragment, SimpleProductFragment } from '@/queries/fragments/product.gql';

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
                description
                meta_keywords
                products(currentPage: $currentPage, pageSize: $pageSize, sort: $productSort) {
                    page_info {
                        current_page
                        page_size
                        total_pages
                    }
                    items {
                        uid
                        canonical_url
                        url_key
                        stock_status
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
            ... on SimpleProduct {
                ...SimpleProductFragment
            }
            ... on ConfigurableProduct {
                ...ConfigurableProductFragment
            }
        }
    }
    ${ConfigurableProductFragment}
    ${SimpleProductFragment}
`;

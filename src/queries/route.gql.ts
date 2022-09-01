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
                uid
                name
                sku
                canonical_url
                short_description {
                    html
                }
                media_gallery {
                    disabled
                    label
                    position
                    url
                    ... on ProductVideo {
                        video_content {
                            media_type
                            video_description
                            video_metadata
                            video_provider
                            video_title
                            video_url
                        }
                    }
                }
                meta_description
                meta_keyword
                meta_title
                price_range {
                    minimum_price {
                        discount {
                            amount_off
                            percent_off
                        }
                        final_price {
                            currency
                            value
                        }
                        regular_price {
                            currency
                            value
                        }
                    }
                    maximum_price {
                        discount {
                            amount_off
                            percent_off
                        }
                        final_price {
                            currency
                            value
                        }
                        regular_price {
                            currency
                            value
                        }
                    }
                }
                short_description {
                    html
                }
                special_to_date
                stock_status
            }
            ... on ConfigurableProduct {
                uid
                name
                sku
                canonical_url
                short_description {
                    html
                }
                media_gallery {
                    disabled
                    label
                    position
                    url
                    ... on ProductVideo {
                        video_content {
                            media_type
                            video_description
                            video_metadata
                            video_provider
                            video_title
                            video_url
                        }
                    }
                }
                meta_description
                meta_keyword
                meta_title
                price_range {
                    minimum_price {
                        discount {
                            amount_off
                            percent_off
                        }
                        final_price {
                            currency
                            value
                        }
                        regular_price {
                            currency
                            value
                        }
                    }
                    maximum_price {
                        discount {
                            amount_off
                            percent_off
                        }
                        final_price {
                            currency
                            value
                        }
                        regular_price {
                            currency
                            value
                        }
                    }
                }
                short_description {
                    html
                }
                special_to_date
                stock_status
                configurable_options {
                    attribute_code
                    attribute_uid
                    label
                    position
                    uid
                    use_default
                    values {
                        default_label
                        use_default_value
                        store_label
                        uid
                        swatch_data {
                            value
                            ... on ImageSwatchData {
                                thumbnail
                            }
                        }
                    }
                }
            }
        }
    }
`;

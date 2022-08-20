import { gql } from '@apollo/client';

export const ProductFragment = gql`
    fragment ProductFragment on ProductInterface {
        uid
        name
        sku
        canonical_url
        description {
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
        ... on ConfigurableProduct {
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
`;
import { gql } from '@apollo/client';

export const getStoreConfig = gql`
    query getStoreConfig {
        storeConfig {
            store_code
            store_name
            is_default_store
            store_group_code
            is_default_store_group
            locale
            base_currency_code
            default_display_currency_code
            timezone
            weight_unit
            secure_base_link_url
            secure_base_media_url

            default_title
            default_keywords
            welcome

            cms_home_page
            cms_no_route

            product_url_suffix
            category_url_suffix
            title_separator
            list_mode
            grid_per_page_values
            list_per_page_values
            grid_per_page
            list_per_page
            catalog_default_sort_by

            root_category_uid
        }
    }
`;

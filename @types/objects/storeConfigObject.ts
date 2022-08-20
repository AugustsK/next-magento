export interface StoreConfigObject {
    store_code: string;
    store_name: string;
    is_default_store: boolean;
    store_group_code: string;
    is_default_store_group: boolean;
    locale: string;
    base_currency_code: string;
    default_display_currency_code: string;
    timezone: string;
    weight_unit: string;
    secure_base_link_url: string;
    secure_base_media_url: string;

    default_title: string;
    default_keywords: string;
    welcome: string;

    cms_home_page: string;
    cms_no_route: string;

    product_url_suffix: string;
    category_url_suffix: string;
    title_separator: string;
    list_mode: string;
    grid_per_page_values: string;
    list_per_page_values: string;
    grid_per_page: number;
    list_per_page: number;
    catalog_default_sort_by: string;

    root_category_uid: string;
}

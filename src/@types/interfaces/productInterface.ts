export interface ProductInterface {
    uid: string;
    attribute_set_id: number;
    canonical_url: string;
    url_key: string;
    stock_status: 'IN_STOCK' | 'OUT_OF_STOCK';
    image: {
        url: string;
        label: string;
    };
    price_range: {
        minimum_price: {
            final_price: {
                currency: string;
                value: number;
            };
        };
    };
    name: string;
    review_count: number;
    rating_summary: number;
}

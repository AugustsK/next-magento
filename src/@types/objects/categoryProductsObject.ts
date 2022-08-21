import { ProductInterface } from '@/app/@types/interfaces';
import { SearchResultPageInfoObject } from '@/app/@types/objects/searchResultPageInfoObject';

export interface CategoryProductsObject {
    items: Partial<ProductInterface>[];
    page_info: Partial<SearchResultPageInfoObject>;
    total_count: number;
}

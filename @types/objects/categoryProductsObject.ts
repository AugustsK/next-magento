import { ProductInterface } from "@/types/interfaces";
import { SearchResultPageInfoObject } from "@/types/objects/searchResultPageInfoObject";

export interface CategoryProductsObject {
    items: Partial<ProductInterface>[]
    page_info: Partial<SearchResultPageInfoObject>
    total_count: number
}
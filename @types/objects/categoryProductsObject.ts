import { ProductInterface } from "@/types/interfaces";
import { SearchResultPageInfoObject } from "@/types/objects/searchResultPageInfoObject";

export interface CategoryProductsObject {
    items: ProductInterface[]
    page_info: SearchResultPageInfoObject
    total_count: number
}
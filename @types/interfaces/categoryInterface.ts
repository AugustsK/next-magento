import { BreadcrumbObject, CategoryProductsObject, CmsBlockObject } from '@/types/objects';

export interface CategoryInterface {
    breadcrumbs: Partial<BreadcrumbObject>[];
    canonical_url: string;
    cms_block: Partial<CmsBlockObject>;
    created_at: string;
    default_sort_by: string;
    description: string;
    id: number;
    level: number;
    name: string;
    path_in_store: string;
    path: string;
    position: number;
    product_count: number;
    products: Partial<CategoryProductsObject>;
    staged: boolean;
    uid: string;
    updated_at: string;
    url_key: string;
    url_path: string;
    meta_description: string;
    meta_keywords: string;
    meta_title: string;
}

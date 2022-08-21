import { CategoryInterface, ProductInterface } from '@/app/@types/interfaces';
import { CmsPageObject } from '@/app/@types/objects/cmsPageObject';

export const ROUTE_TYPE_ENUM = {
    PRODUCT: 'PRPDUCT',
    CATEGORY: 'CATEGORY',
    CMS_PAGE: 'CMS_PAGE'
} as const;

type routeTypeEnumObject = typeof ROUTE_TYPE_ENUM;
type routeEnum = routeTypeEnumObject[keyof routeTypeEnumObject];

export interface RouteObject extends Partial<CategoryInterface>, Partial<ProductInterface>, Partial<CmsPageObject> {
    redirect_code: number;
    relative_url: string;
    type: routeEnum;
}

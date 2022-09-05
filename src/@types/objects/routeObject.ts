export const ROUTE_TYPE_ENUM = {
    PRODUCT: 'PRODUCT',
    CATEGORY: 'CATEGORY',
    CMS_PAGE: 'CMS_PAGE'
} as const;

type routeTypeEnumObject = typeof ROUTE_TYPE_ENUM;
type routeEnum = routeTypeEnumObject[keyof routeTypeEnumObject];

export interface RouteObject {
    redirect_code: number;
    relative_url: string;
    type: routeEnum;
}

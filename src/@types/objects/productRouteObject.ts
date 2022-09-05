import { ProductInterface } from '@/types/interfaces';
import { RouteObject } from '@/types/objects/routeObject';

export interface ProductRouteObject extends ProductInterface, RouteObject {
    type: 'PRODUCT';
}

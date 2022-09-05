import { CategoryInterface } from '@/types/interfaces';
import { RouteObject } from '@/types/objects/routeObject';

export interface CategoryRouteObject extends CategoryInterface, RouteObject {
    type: 'CATEGORY';
}

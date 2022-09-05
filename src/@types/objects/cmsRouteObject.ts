import { CmsPageObject } from '@/types/objects/cmsPageObject';
import { RouteObject } from '@/types/objects/routeObject';

export interface CmsRouteObject extends CmsPageObject, RouteObject {
    type: 'CMS_PAGE';
}

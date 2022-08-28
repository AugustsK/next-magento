import { CategoryInterface } from '@/app/@types/interfaces';

export interface CategoryTreeObject extends CategoryInterface {
    children: CategoryTreeObject[];
    children_count: number;
}

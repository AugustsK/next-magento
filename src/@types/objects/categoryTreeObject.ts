import { CategoryInterface } from '@/app/@types/interfaces';

export interface CategoryTreeObject extends CategoryInterface {
    children: Partial<CategoryTreeObject>[];
    children_count: number;
}

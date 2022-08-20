import { CategoryInterface } from '@/types/interfaces';

export interface CategoryTreeObject extends CategoryInterface {
    children: Partial<CategoryTreeObject>[];
    children_count: number;
}

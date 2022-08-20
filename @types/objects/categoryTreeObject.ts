import { CategoryInterface } from '@/types/interfaces';

export interface CategoryTreeObject extends CategoryInterface {
    children: Partial<CategoryInterface>[];
    children_count: number;
}

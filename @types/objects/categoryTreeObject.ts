import { CategoryInterface } from "@/types/interfaces";

export interface CategoryTreeObject extends CategoryInterface
{
    children?: CategoryInterface[]
    children_count?: number
}

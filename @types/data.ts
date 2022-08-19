import {CategoryTreeObject, StoreConfigObject} from "@/types/objects";

export interface SharedPageData {
    storeConfig?: StoreConfigObject,
    megaMenu?: CategoryTreeObject[]
}
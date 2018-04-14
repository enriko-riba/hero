import { Building } from "./Building";
import { Item } from "./Item";

export interface WorldInitData {
    BuildingData:Array<Building>;
    ItemData:Array<Item>;
}
import { Building } from "./Building";
import { Item } from "./Item";
import { Kingdom } from "./Kingdom";

export interface WorldInitData {
    BuildingData:Array<Building>;
    ItemData:Array<Item>;
    KingdomData:Array<Kingdom>;
}
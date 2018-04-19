import { CityData } from "./CityData";
import { CharData } from "./CharData";

export interface SyncData {
    exp: number;
    gold: number;
    city: CityData;
    charData: CharData;

    //  for debuging
    mid:number;
  }
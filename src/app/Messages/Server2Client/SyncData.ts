import { CityData } from "./CityData";
import { CharData } from "./CharData";

export interface SyncData {
    exp: number;
    gold: number;
    City: CityData;
    CharData: CharData
  }
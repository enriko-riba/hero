import { City } from "./City";
import { CharData } from "./CharData";

export interface SyncData {
    exp: number;
    gold: number;
    city: City;
    charData: CharData;

    //  for debuging
    mid:number;
  }
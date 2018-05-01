import { City } from "./City";
import { CharData } from "./CharData";

export interface SyncData {
  exp: number;
  gold: number;
  coins: number;
  city: City;
  charData: CharData;

  currentPlaceId: number;
  kingdomId: number;
  
  //  for debuging
  mid: number;
}
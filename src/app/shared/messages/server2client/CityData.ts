import { Building } from './Building';
import { Resources } from "./Resources";

export interface CityData {   
    resources : Resources
    production: Resources;
    buildings: Building[];
    storageCap: number;
  }
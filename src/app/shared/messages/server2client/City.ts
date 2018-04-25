import { Building } from './Building';
import { Resources } from "./Resources";
import { Builder } from './Builder';

export interface City {   
    resources : Resources
    production: Resources;
    buildings: Building[];
    storageCap: number;
    builders: Builder[];
  }
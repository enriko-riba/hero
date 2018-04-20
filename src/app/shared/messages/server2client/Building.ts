import { Resources } from "./Resources";

export interface Building {
        id: number;
        level: number;
        name: string;
        type: BuildingType;
        buildTime: number;
        buildTimeLeft: number;
        production: Resources;
        cost: Resources;
        upgradeCost: Resources;
}

export enum BuildingType {
        Farm,
        WoodCutter,
        Quarry,
}
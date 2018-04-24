import { ProductionType } from './Building';
import { Resources } from "./Resources";

export interface Building {
        id: number;
        level: number;
        name: string;
        type: BuildingType;
        buildTime: number;
        buildTimeLeft: number;
        production: Resources;
        upgradeCost: Resources;
        upgradeTime: number;
        destroyRefund: Resources;
        storage: number;
}

export enum BuildingType {
        Farm,
        WoodCutter,
        Quarry,
        Storage
}

export type ProductionType = 'f' | 'w' | 's';

export function getBuildingProductionType(b: Building): ProductionType {
        switch (b.type) {
                case BuildingType.Farm:
                        return 'f';
                case BuildingType.WoodCutter:
                        return 'w';
                case BuildingType.Quarry:
                        return 's';
        }
}

export function getBuildingProductionString(b: Building, level?:number): string {
        //      TODO: keep in sync with server side logic
        const baseFood = 0.5;
        const baseWood = 0.5;
        const baseStone = 0.2;

        level = level || b.level;

        switch (b.type) {
                case BuildingType.Farm:
                        return `+${b.production.food *level * 3600} food/h`;
                case BuildingType.WoodCutter:
                        return `+${b.production.wood *level * 3600} wood/h`;
                case BuildingType.Quarry:
                        return `+${b.production.stone * level * 3600} stone/h`;
                case BuildingType.Storage:
                        return `+${b.storage * level} storage`;
        }
        return "";
}
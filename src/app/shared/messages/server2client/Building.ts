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

export function getBuildingProductionTypeString(b: Building): string {
        switch (b.type) {
                case BuildingType.Farm:
                        return 'food';
                case BuildingType.WoodCutter:
                        return 'wood';
                case BuildingType.Quarry:
                        return 'stone';
                case BuildingType.Storage:
                        return 'storage';
        }
}

export function getBuildingProduction(b: Building, level?: number): number {
        level = level || b.level;
        switch (b.type) {
                case BuildingType.Farm:
                        return b.production.food * level;
                case BuildingType.WoodCutter:
                        return b.production.wood * level;
                case BuildingType.Quarry:
                        return b.production.stone * level;
                case BuildingType.Storage:
                        return b.storage * level;
                default:
                        return 0;
        }
}

export function getBuildingProductionString(b: Building, level?: number): string {
        level = level || b.level;
        var prod = getBuildingProduction(b, level);
        switch (b.type) {
                case BuildingType.Farm:
                        return `${prod * 3600} food/h`;
                case BuildingType.WoodCutter:
                        return `${prod * 3600} wood/h`;
                case BuildingType.Quarry:
                        return `${prod * 3600} stone/h`;
                case BuildingType.Storage:
                        return `${prod} storage`;
        }
        return "";
}
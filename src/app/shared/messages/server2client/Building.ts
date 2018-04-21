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
}

export enum BuildingType {
        Farm,
        WoodCutter,
        Quarry,
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
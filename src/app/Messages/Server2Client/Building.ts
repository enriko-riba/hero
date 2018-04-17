import { Resources } from "./Resources";

export interface Building {
        id: number;
        level: number;
        name: string;
        type: number;
        buildTime: number;
        production: Resources;
        cost: Resources;
}
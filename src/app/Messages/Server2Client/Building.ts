import { Resources } from "./Resources";

export interface Building{
        id : number;
        Level: number;
        Name: string;
        Type:number;
        BuildTime: number;
        Production:Resources;
        Cost:Resources;
}
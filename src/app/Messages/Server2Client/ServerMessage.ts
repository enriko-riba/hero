import { SyncData } from "./SyncData";
import { ChatData } from "./ChatData";
import { WorldInitData } from "./WorldInitData";

export enum MessageType{
    Sync,
    WorldInit,
    Chat
  }
  
  export interface ServerMessage {
    Cid: number;
    Tick: number;
    Data: string;
  
    Type: MessageType;
    Payload:  WorldInitData | SyncData | ChatData;
  }
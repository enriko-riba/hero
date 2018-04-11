import { SyncData } from "./SyncData";
import { ChatData } from "./ChatData";

export enum MessageType{
    Sync,
    Chat
  }
  
  export interface ServerMessage {
    Cid: number;
    Tick: number;
    Data: string;
  
    Type: MessageType;
    Payload: SyncData | ChatData;
  }
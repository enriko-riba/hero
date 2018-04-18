import { SyncData } from "./SyncData";
import { ChatData } from "./ChatData";
import { WorldInitData } from "./WorldInitData";
import { MessageKind } from "../../game-client.service";

export enum MessageType{
    Sync,
    WorldInit,
    CommandResponse,
    Chat
  }
  
  export interface ServerMessage {
    Cid: number;
    Tick: number;
    Data: string;
  
    Type: MessageType;
    Payload:  WorldInitData | SyncData | ChatData;

    /**
     * Used only for command responses.
     * This member is not sent from server, instead it is set by GameClientService
     */
    CommandKind: MessageKind;
  }
export class Request{
    constructor(
        public Created : number,
        public Cid : number,
        public Kind: MessageKind
    ){}
    /**
     *  Format: 2 char opcode, n char payload
     */
    public Data: string;
  }
  
  export enum MessageKind{
    Error = 0,
    Command = 2,
    StartBuilding = 10,
    StartBuildingUpgrade = 11,
    StartBuildingDestroy = 12,
    Chat = 1024
  }
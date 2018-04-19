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
    Command  = 2,
    StartBuilding = 10,
    Chat = 1024
  }
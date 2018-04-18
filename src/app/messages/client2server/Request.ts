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
    Chat = 3
}

export enum CommandKind{
    Null = "00",
    Login = "01",
    BuildStart = "10",
}
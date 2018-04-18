import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { Subscriber } from 'rxjs/Subscriber';
import { ServerMessage, MessageType } from './Messages/Server2Client/ServerMessage';
import { WorldInitData } from './Messages/Server2Client/WorldInitData';
import { SyncData } from './Messages/Server2Client/SyncData';
import { Building } from './Messages/Server2Client/Building';
import { Item } from './Messages/Server2Client/Item';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class GameClientService {
  private socket: WebSocket;
  private cid = 1;

  constructor(private loginSvc: LoginService) { }

  public buildingTemplates: Array<Building>;
  public itemTemplates: Array<Item>;
  public isConnected = false;
  public currentGameData: SyncData;
  private subscription: Subscription;
  public serverMessages: Observable<ServerMessage>;

  public initSocket(): void {
    if (this.socket) {
      this.subscription.unsubscribe();
      this.socket.close();
    }

    const url = `${environment.serverUrl}?idToken=${this.loginSvc.token}`;
    console.log(url);
    this.socket = new WebSocket(url);

    this.serverMessages = new Observable<ServerMessage>(observer => {
      this.socket.onmessage = (event) => observer.next(this.parseMesage(event.data));
      this.socket.onerror = (event) => observer.error(event);
      this.socket.onclose = (event) => observer.complete();
    });
    this.subscription = this.serverMessages.subscribe();

    this.socket.onopen = (event) => {
      console.log('connected!')
      this.isConnected = true;
    };
    this.socket.onclose = (event) => {
      console.log('disconnected!')
      this.isConnected = false;
    };
    //this.socket.onmessage = (event) => this.parseMesage(event.data);
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close(1000, "bye");
    }
  }

  public send(message: Request): void {
    this.socket.send(JSON.stringify(message));
  }

  // public onMessage(): Observable<ServerMessage> {
  //   return new Observable<ServerMessage>(observer => {
  //     this.socket.onmessage = (event) => observer.next(this.parseMesage(event.data));
  //     this.socket.onerror = (event) => observer.error(event);
  //     this.socket.onclose = (event) => observer.complete();
  //   });
  // }

  /*--------------------------------------
  //  Commands & related
  --------------------------------------*/
  public canBuild(b: Building) {
    let res = this.currentGameData.city.resources;
    return (b.cost.food <= res.food && b.cost.wood <= res.wood && b.cost.stone <= res.stone);
  }

  public startBuilding(slot: number, buildingId: number) {
    let building: Building = this.buildingTemplates.find((b) => b.id === buildingId);
    if (this.canBuild(building)) {
      var cm = new Request(Date.now(), this.cid++, MessageKind.Command);
      cm.Data = `${CommandKind.BuildStart}${slot}|${buildingId}`;
      this.send(cm);
    }
  }

  /*--------------------------------------
   //  EOF commands
   --------------------------------------*/


  private convertToMessage(data: string) {
    const msg: ServerMessage = JSON.parse(data);
    const type = msg.Data.substring(0, 4);
    const payload = msg.Data.substring(5);
    switch (type) {
      case "WINI":
        msg.Type = MessageType.WorldInit;
        msg.Payload = JSON.parse(payload) as WorldInitData;
        break;

      case "SYNC":
        msg.Type = MessageType.Sync;
        msg.Payload = JSON.parse(payload) as SyncData;
        break;

      case "CMDR":
        let kind = payload.substr(0, 2);
        let load = payload.substring(2);
        msg.Type = MessageType.CommandResponse;
        msg.CommandKind == CommandKind[kind];
        msg.Payload = JSON.parse(load);
        break;
    }
    return msg;
  }

  private parseMesage(data: string) {
    const msg: ServerMessage = this.convertToMessage(data);

    switch (msg.Type) {
      case MessageType.WorldInit:
        this.buildingTemplates = (msg.Payload as WorldInitData).BuildingData as Building[];
        this.itemTemplates = (msg.Payload as WorldInitData).ItemData as Item[];
        break;

      case MessageType.Sync:
        this.currentGameData = msg.Payload as SyncData;
        break;

      case MessageType.CommandResponse:
        this.HandleCommandResponse(msg);
        break;
    }
    return msg;
  }

  private HandleCommandResponse(msg: ServerMessage) {
    switch (msg.CommandKind) {
      case CommandKind.BuildStart:       
        let slot = (msg.Payload as any).slot;
        let building = (msg.Payload as any).bulding;
        this.currentGameData.city.buildings[slot] = building;
        break;
        
      default:
        break;
    }
  }
}

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
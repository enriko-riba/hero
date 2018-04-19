import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';
import { LoginService } from './login.service';
import { Building, Item, Request, SyncData, ServerMessage, MessageKind, MessageType, WorldInitData } from './shared/index';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class GameClientService {
  private socket: WebSocket;
  private cid = 1;

  constructor(private loginSvc: LoginService) { }

  public buildingTemplates: Array<Building>;
  public itemTemplates: Array<Item>;
  public isConnected = false;

  
  //  for game state change notifications
  public currentGameData: SyncData;
  private currentState : BehaviorSubject<SyncData> = new BehaviorSubject<SyncData>(null);
  public get gameState() : Observable<SyncData>{
    return this.currentState.asObservable();
  }

  //  server message pump
  //private subscription: Subscription;
  //public serverMessages: Observable<ServerMessage>;


  public initSocket(): void {
    if (this.socket) {
      //this.subscription.unsubscribe();
      this.socket.close();
    }

    const url = `${environment.serverUrl}?idToken=${this.loginSvc.token}`;
    console.log(url);
    this.socket = new WebSocket(url);

    // this.serverMessages = new Observable<ServerMessage>(observer => {
    //   this.socket.onmessage = (event) => observer.next(this.parseMesage(event.data));
    //   this.socket.onerror = (event) => observer.error(event);
    //   this.socket.onclose = (event) => observer.complete();
    // });
    // this.subscription = this.serverMessages.subscribe();

    this.socket.onopen = (event) => {
      console.log('connected!')
      this.isConnected = true;
    };
    this.socket.onclose = (event) => {
      console.log('disconnected!')
      this.isConnected = false;
    };
    this.socket.onmessage = (event) => this.parseMesage(event.data);
  }

  public disconnect() {
    if (this.socket) {
      this.socket.close(1000, "bye");
    }
  }

  public send(message: Request): void {
    this.socket.send(JSON.stringify(message));
  }

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
      var cm = new Request(Date.now(), this.cid++, MessageKind.StartBuilding);
      cm.Data = `${slot}|${buildingId}`;
      this.send(cm);
    }
  }

  /*--------------------------------------
   //  EOF commands
   --------------------------------------*/

  private mid = 0;

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
        let parts = payload.split('|');
        let load = parts[1];
        let kindValue = parseInt(parts[0], 10);
        msg.Type = MessageType.CommandResponse;
        msg.CommandKind = kindValue;
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
        this.currentGameData.mid = ++this.mid;
        this.currentState.next(this.currentGameData);
        break;

      case MessageType.CommandResponse:
        this.HandleCommandResponse(msg);
        break;
    }
    return msg;
  }

  private HandleCommandResponse(msg: ServerMessage) {
    switch (msg.CommandKind) {
      case MessageKind.StartBuilding:       
        let slot = (msg.Payload as any).slot;
        let building = (msg.Payload as any).building;
        this.currentGameData.city.buildings[slot] = building;
        this.currentGameData.mid = ++this.mid;        
        this.currentState.next(this.currentGameData);
        break;
        
      default:
        break;
    }
  }
}
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { Subscriber } from 'rxjs/Subscriber';

const SERVER_URL = 'wss://hero-srv.azurewebsites.net/srv';

export enum MessageType{
  Sync,
  Chat
}

export interface Message {
  Cid: number;
  Tick: number;
  Data: string;

  Type: MessageType;
  Payload: SyncData | ChatData;
}

export interface ChatData {
  sender: string;
  sendTime: number;
  message: string;
}

export interface SyncData {
  exp: number;
  gold: number;
  City: CityData;
}
export interface CityData {
  food: number;
  wood: number;
  stone: number;
  prodFood: number;
  prodWood: number;
  prodStone: number;
}

export enum Event {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

@Injectable()
export class GameClientService {

  private socket;
  constructor(private loginSvc: LoginService) {}

  public initSocket(): void {
    const url =  `${SERVER_URL}?idToken=${this.loginSvc.idToken}`;
    console.log(url);
    this.socket = new WebSocket(url);    
  }

  public send(message: Message): void {
    this.socket.send(message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.onmessage = (event) => this.parseMesage(event.data, observer);
      this.socket.onerror = (event) => observer.error(event.data);
      this.socket.onclose = (event) => observer.complete();
    });
  }

  private parseMesage(data: string, observer : Subscriber<Message>){
      const msg = JSON.parse(data);
      const type = msg.Data.substring(0, 4); 
      const payload = msg.Data.substring(5); 
      switch(type)
      {
        case "SYNC":
          msg.Type = MessageType.Sync;
          msg.Payload = JSON.parse(payload);
          break;
      }
      observer.next(msg);
  }
}
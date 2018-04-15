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

@Injectable()
export class GameClientService {
  private socket: WebSocket;
  
  constructor(private loginSvc: LoginService) {}

  public buildings: Array<Building>;
  public items: Array<Item>;
  public isConnected = false;

  public initSocket(): void {
    if(this.socket){
      this.socket.close();
    }

    const url =  `${environment.serverUrl}?idToken=${this.loginSvc.token}`;
    console.log(url);
    this.socket = new WebSocket(url);  
    this.socket.onopen = (event) => {
      console.log('connected!')
      this.isConnected = true;
    };
  }

  public disconnect(){
    if(this.socket){
      this.socket.close(1000, "bye");
    }
  }

  public send(message: ServerMessage): void {
    this.socket.send(JSON.stringify(message));
  }

  public onMessage(): Observable<ServerMessage> {
    return new Observable<ServerMessage>(observer => {
      this.socket.onmessage = (event) => this.parseMesage(event.data, observer);
      this.socket.onerror = (event) => observer.error(event);
      this.socket.onclose = (event) => {
        console.log('disconnected!')
        this.isConnected = false;
        observer.complete();
      }
    });
  }

  private parseMesage(data: string, observer : Subscriber<ServerMessage>){
      const msg : ServerMessage = JSON.parse(data);
      const type = msg.Data.substring(0, 4); 
      const payload = msg.Data.substring(5); 
      switch(type)
      {
        case "WINI":
          msg.Type = MessageType.WorldInit;
          msg.Payload = JSON.parse(payload) as WorldInitData;
          this.buildings = msg.Payload.BuildingData;
          this.items = msg.Payload.ItemData;
          break;

        case "SYNC":
          msg.Type = MessageType.Sync;
          msg.Payload = JSON.parse(payload) as SyncData;
          break;
      }
      observer.next(msg);
  }
}
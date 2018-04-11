import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { Subscriber } from 'rxjs/Subscriber';
import { ServerMessage, MessageType } from './Messages/Server2Client/ServerMessage';

const SERVER_URL = 'wss://hero-srv.azurewebsites.net/srv';

@Injectable()
export class GameClientService {

  private socket;
  constructor(private loginSvc: LoginService) {}

  public initSocket(): void {
    const url =  `${SERVER_URL}?idToken=${this.loginSvc.idToken}`;
    console.log(url);
    this.socket = new WebSocket(url);    
  }

  public send(message: ServerMessage): void {
    this.socket.send(message);
  }

  public onMessage(): Observable<ServerMessage> {
    return new Observable<ServerMessage>(observer => {
      this.socket.onmessage = (event) => this.parseMesage(event.data, observer);
      this.socket.onerror = (event) => observer.error(event.data);
      this.socket.onclose = (event) => observer.complete();
    });
  }

  private parseMesage(data: string, observer : Subscriber<ServerMessage>){
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
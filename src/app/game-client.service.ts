import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';
import { Subscriber } from 'rxjs/Subscriber';
import { ServerMessage, MessageType } from './Messages/Server2Client/ServerMessage';

//const SERVER_URL = 'wss://hero-srv.azurewebsites.net/srv';

@Injectable()
export class GameClientService {

  private socket: WebSocket;
  constructor(private loginSvc: LoginService) {}

  public initSocket(): void {
    if(this.socket){
      this.socket.close();
    }

    const url =  `${environment.serverUrl}?idToken=${this.loginSvc.token}`;
    console.log(url);
    this.socket = new WebSocket(url);    
  }

  public send(message: ServerMessage): void {
    this.socket.send(JSON.stringify(message));
  }

  public onMessage(): Observable<ServerMessage> {
    return new Observable<ServerMessage>(observer => {
      this.socket.onmessage = (event) => this.parseMesage(event.data, observer);
      this.socket.onerror = (event) => observer.error(event);
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
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login.service';

const SERVER_URL = 'ws://hero-srv.azurewebsites.net/srv';

export class Message {

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
      this.socket.onmessage = (event) => observer.next(event.data);
      this.socket.onerror = (event) => observer.error(event.data);
      this.socket.onclose = (event) => observer.complete();
    });
  }
}
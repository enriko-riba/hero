import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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
  constructor() {}

  public initSocket(): void {
    this.socket = new WebSocket(SERVER_URL);
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}

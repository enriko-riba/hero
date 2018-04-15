import { GameClientService } from './game-client.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public client : GameClientService){}

  title = 'My Hero';
}

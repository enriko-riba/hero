import { Component, OnInit } from '@angular/core';
import { GameClientService } from '../../game-client.service';
import { ServerMessage, MessageType } from '../../Messages/Server2Client/ServerMessage';
import { SyncData } from '../../Messages/Server2Client/SyncData';
import { CharData } from '../../Messages/Server2Client/CharData';
import { CityData } from '../../Messages/Server2Client/CityData';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  public cityData: CityData;

  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    this.gcs.onMessage().subscribe(msg => this.parseSync(msg));
    if (this.gcs.currentGameData) {
      const msg: ServerMessage = {
            Cid: 0,
            Tick: 0,
            Data: '',
            Type: MessageType.Sync,
            Payload: this.gcs.currentGameData,
      };
      this.parseSync(msg);
    }
  }

  parseSync(msg: ServerMessage) {
    if (msg.Type === MessageType.Sync) {
      this.cityData = (msg.Payload as SyncData).City;
    }
  }
}

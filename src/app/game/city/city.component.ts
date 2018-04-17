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

  constructor(public gcs: GameClientService) { }

  ngOnInit() {   
  }
}

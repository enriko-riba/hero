import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GameClientService, Message, SyncData, CityData } from '../../game-client.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public sd : SyncData;
  
  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    this.gcs.onMessage().subscribe(msg=> this.parseSync(msg));
  }

  parseSync(msg: Message) {
    this.sd = msg.Payload as SyncData;    
  }
}

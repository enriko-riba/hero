import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GameClientService} from '../../game-client.service';
import { SyncData } from '../../Messages/Server2Client/SyncData';
import { ServerMessage } from '../../Messages/Server2Client/ServerMessage';

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

  parseSync(msg: ServerMessage) {
    this.sd = msg.Payload as SyncData;    
  }

  eqClick(id){
    console.log('clikc, id:', id);
  }
}

import { GameClientService } from './../../../game-client.service';
import { Building } from './../../../Messages/Server2Client/Building';
import { Component, OnInit, Input } from '@angular/core';
import { ServerMessage, MessageType } from '../../../Messages/Server2Client/ServerMessage';
import { SyncData } from '../../../Messages/Server2Client/SyncData';

@Component({
  selector: 'city-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {
  @Input() id: number;

  private building: Building;
  public isEmpty = true;

  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    console.log('id: ' +  this.id + ', building: ' + (this.building ? this.building.name : ''));
    this.gcs.serverMessages.subscribe(this.parseServerMessage);
  }

  private parseServerMessage(msg:ServerMessage){
    if(msg.Type === MessageType.Sync){
      let data = msg.Payload as SyncData;
      let slotBuilding = data.city.buildings[this.id];
      if(slotBuilding){
        this.isEmpty = false;
        //  TODO: update slot building
      }else {
        this.isEmpty = true;
      }
    }
  }

  public onBuildClick(){

  }
}

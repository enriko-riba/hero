import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GameClientService} from '../../game-client.service';
import { SyncData } from '../../Messages/Server2Client/SyncData';
import { ServerMessage } from '../../Messages/Server2Client/ServerMessage';
import { CharData, EquipmentSlot } from '../../Messages/Server2Client/CharData';
import { items, Item } from '../../Items/items';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  public sd : SyncData;
  private ch: CharData;

  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    this.gcs.onMessage().subscribe(msg=> this.parseSync(msg));
  }

  parseSync(msg: ServerMessage) {
    this.sd = msg.Payload as SyncData;
    this.ch = this.sd.Character || {slots: [], equipped: []};    
  }

  private damageDesc(item: Item){
      return item.dmg ? "+" + item.dmg.toString() + " attack" : "";
  }

  private armorDesc(item: Item){
    return item.arm ? "+" + item.arm.toString() + " armor" : "";
  }

  public eqInfo(slotId: EquipmentSlot){
    if(!this.ch) return "";
    let idx = this.ch.equipped[slotId] || 0;
    if(idx > 0){
      let item : Item = items[idx];
      return `${item.desc} ${this.damageDesc(item)} ${this.armorDesc(item)}`;
    }
    else{
      return "-";
    }
  }

  public eqClick(id){
    console.log('clikc, id:', id);
  }
}

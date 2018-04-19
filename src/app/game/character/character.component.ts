import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GameClientService} from '../../game-client.service';
import { EquipmentSlot, Item, SyncData } from '../../shared';

@Component({
  selector: 'game-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  
  private lastState: SyncData;
  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    this.gcs.gameState.subscribe(s => this.lastState = s);
  }


  private damageDesc(item: Item){
      return item.dmg ? "+" + item.dmg.toString() + " attack" : "";
  }

  private armorDesc(item: Item){
    return item.arm ? "+" + item.arm.toString() + " armor" : "";
  }

  public eqInfo(slotId: EquipmentSlot){
    if(!this.lastState) return "";
    let id = this.lastState.charData.equipped[slotId] || 0;
    if(id > 0){
      let item : Item = this.gcs.itemTemplates.find((i) => i.id ===id );
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

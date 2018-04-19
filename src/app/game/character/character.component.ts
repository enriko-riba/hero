import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { GameClientService} from '../../game-client.service';
import { Item } from '../../shared/messages/server2client/Item';
import { EquipmentSlot } from '../../shared/messages/server2client/CharData';

@Component({
  selector: 'game-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  
  constructor(private gcs: GameClientService) { }

  ngOnInit() {
  }


  private damageDesc(item: Item){
      return item.dmg ? "+" + item.dmg.toString() + " attack" : "";
  }

  private armorDesc(item: Item){
    return item.arm ? "+" + item.arm.toString() + " armor" : "";
  }

  public eqInfo(slotId: EquipmentSlot){
    if(!this.gcs.currentGameData) return "";
    let id = this.gcs.currentGameData.charData.equipped[slotId] || 0;
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

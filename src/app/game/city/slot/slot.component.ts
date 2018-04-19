import { GameClientService } from './../../../game-client.service';
import { Component, OnInit, Input } from '@angular/core';
import { buildTime } from '../../../shared/utility';
import { Building, BuildingType } from '../../../shared/messages/server2client/Building';

@Component({
  selector: 'city-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {
  @Input() id: number;

  private building: Building;
  public SlotState = SlotState;

  constructor(private gcs: GameClientService) { }

  ngOnInit() {
  }

  // public get state() {
  //   const b = this.gcs.currentGameData.city.buildings[this.id];
  //   if (!b)
  //     return SlotState.Empty;
  //   else if (b.buildTimeLeft > 0)
  //     return SlotState.InProgress;
  //   else
  //     return SlotState.Finished;
  // }


  public get timeLeft(){
    const b = this.gcs.currentGameData.city.buildings[this.id];
    return (b && b.buildTimeLeft > 0) ? buildTime(b) : "";
  }

  public statusClass(){
    const b = this.gcs.currentGameData.city.buildings[this.id];
    if (!b)
      return "empty";
    else if (b.buildTimeLeft > 0)
      return "progress";
    else
      return "finished";
  }

  public getImageUrl() {
    const b = this.gcs.currentGameData.city.buildings[this.id];

    //  empty slot
    if (!b)
      return "assets/buttons/empty_slot.png";

    let isProgress = b.buildTimeLeft > 0;
    switch (b.type) {
      case BuildingType.Farm:
        return isProgress ? "assets/buttons/hammer.png" : "assets/images/b_food_01.png";
      case BuildingType.WoodCutter:
        return isProgress ? "assets/buttons/hammer.png" : "assets/images/b_wood_01.png";
      case BuildingType.Quarry:
        return isProgress ? "assets/buttons/hammer.png" : "assets/images/b_stone_01.png";
    }
  }

}

export enum SlotState {
  Empty,
  InProgress,
  Finished
}
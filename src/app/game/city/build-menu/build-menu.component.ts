import { Component, OnInit } from '@angular/core';
import { GameClientService } from '../../../game-client.service';
import { Building, BuildingType, timeString, getImage } from '../../../shared';

@Component({
  selector: 'city-build-menu',
  templateUrl: './build-menu.component.html',
  styleUrls: ['./build-menu.component.scss']
})
export class BuildMenuComponent implements OnInit {
  public visible = false;
  public items: Building[];
  public buildTime = (b: Building) => timeString(b.upgradeTime,'ms');
public getImage = getImage;
  private slotIndex: number;
  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    //  TODO: filter out only available building by game logic
    this.items = this.gcs.buildingTemplates;
  }

  showMenu(slotIndex: number) {
    this.slotIndex = slotIndex;
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  canBuild(b: Building) {
    return this.gcs.canBuild(b);
  }

  onClick(building: Building){
    if(this.canBuild(building)){
      this.gcs.startBuilding(this.slotIndex, building.id);
      this.close();
    }
  }
}

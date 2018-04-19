import { Component, OnInit } from '@angular/core';
import { GameClientService } from '../../../game-client.service';
import { buildTime } from '../../../shared/utility';
import { Building, BuildingType } from '../../../shared/messages/server2client/Building';

@Component({
  selector: 'city-build-menu',
  templateUrl: './build-menu.component.html',
  styleUrls: ['./build-menu.component.scss']
})
export class BuildMenuComponent implements OnInit {
  public visible = false;
  public items: Building[];
  public buildTime = buildTime;
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

  getImage(b: Building) {
    switch (b.type) {
      case BuildingType.Farm: return "assets/images/b_food_01.png";
      case BuildingType.WoodCutter: return "assets/images/b_wood_01.png";
      case BuildingType.Quarry: return "assets/images/b_stone_01.png";
    }
  }

  canBuild(b: Building) {
    return this.gcs.canBuild(b);
  }

  onClick(building: Building){
    console.log('Item clicked: ', building,  event);
    if(this.canBuild(building)){
      this.gcs.startBuilding(this.slotIndex, building.id);
      this.close();
    }
  }
}

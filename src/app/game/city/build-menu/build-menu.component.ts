import { Component, OnInit } from '@angular/core';
import { Building, BuildingType } from '../../../Messages/Server2Client/Building';
import { GameClientService } from '../../../game-client.service';

@Component({
  selector: 'city-build-menu',
  templateUrl: './build-menu.component.html',
  styleUrls: ['./build-menu.component.scss']
})
export class BuildMenuComponent implements OnInit {
  public visible = false;
  public items: Building[];

  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    this.items = this.gcs.buildingTemplates;
  }

  showMenu() {
    //  TODO: setup available building
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  getImage(b: Building) {
    switch (b.type) {
      case BuildingType.Farm: return "../../../../assets/images/b_food_01.png";
      case BuildingType.WoodCutter: return "../../../../assets/images/b_wood_01.png";
      case BuildingType.Quarry: return "../../../../assets/images/b_stone_01.png";
    }
  }

  canBuild(b: Building) {
    let res = this.gcs.currentGameData.city.resources;
    return (b.cost.food <= res.food && b.cost.wood <= res.wood && b.cost.stone <= res.stone);
  }

  buildTime(b: Building) {
    let sec = b.buildTime;
    let h = Math.floor(sec / 3600);
    sec -= h * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    var result = "";
    if (h)
      result += `${h}h : `;
    if (min)
      result += `${min}m : `;

    result += `${sec}s`;
    return result;
  }
}

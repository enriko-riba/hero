import { Component, OnInit } from '@angular/core';
import { Building, timeString } from '../../../shared';
import { GameClientService } from '../../../game-client.service';

@Component({
  selector: 'city-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {
  public building : Building;
  public visible = false;
  public upgradeTime = (b: Building) => timeString(this.building.upgradeTime,'ms');
  private index:number;

  constructor(private gcs: GameClientService) { }
  
  ngOnInit() {
  }

  public onUpgradeClick(){
    if(this.canUpgrade()){
      this.gcs.startBuildingUpgrade(this.index);
      this.close();
    }
  }

  public onDestroyClick(){
    //  TODO: implement
    this.close();
  }

  public canUpgrade(){
    return this.gcs.canUpgrade(this.building);
  }

  public get destroyRefund(){
    return this.gcs.getBuildingdestroyRefund(this.building);
  }

  public showMenu(index : number){
    this.index = index;
    this.building = this.gcs.currentGameData.city.buildings[index];
    if(this.building.buildTimeLeft <= 0)
      this.visible = true;
    else
      console.warn('can not comply - upgrade in progress!');
  }

  public close(){
    this.visible = false;
  }

}

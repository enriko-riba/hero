import { Component, OnInit } from '@angular/core';
import { Building } from '../../../shared';
import { GameClientService } from '../../../game-client.service';

@Component({
  selector: 'city-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {
  public building : Building;
  public visible = false;
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
    this.visible = true;
  }

  public close(){
    this.visible = false;
  }

}

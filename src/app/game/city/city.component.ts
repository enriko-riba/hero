import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GameClientService } from '../../game-client.service';
import {BuildMenuComponent} from "./build-menu/build-menu.component";
import {OptionsMenuComponent} from "./options-menu/options-menu.component";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements AfterViewInit {
  @ViewChild("bm") bm: BuildMenuComponent;
  @ViewChild("om") om: OptionsMenuComponent;

  constructor(public gcs: GameClientService) { }

  ngAfterViewInit(){
    console.log(this.bm);
    console.log(this.om);
  }

  onSlotClick(index : number, event : MouseEvent){
    //  if empty slot display build menu else options menu
    let building = this.gcs.currentGameData.city.buildings[index];
    if(building){
      this.om.showMenu(building);
    }else {
      this.bm.showMenu(index);
    }
  }
}

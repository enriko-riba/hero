import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GameClientService } from '../../game-client.service';
import { ServerMessage, MessageType } from '../../Messages/Server2Client/ServerMessage';
import { SyncData } from '../../Messages/Server2Client/SyncData';
import { CharData } from '../../Messages/Server2Client/CharData';
import { CityData } from '../../Messages/Server2Client/CityData';
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
    console.log('click on:' + index);
    const slotElement : HTMLElement = (event.target || event.currentTarget) as HTMLElement;
    let building = this.gcs.currentGameData.city.buildings[index];
    this.bm.showMenu(building);
  }
}

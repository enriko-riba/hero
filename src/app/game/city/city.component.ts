import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { GameClientService } from '../../game-client.service';
import { BuildMenuComponent } from './build-menu/build-menu.component';
import { OptionsMenuComponent } from "./options-menu/options-menu.component";
import { SyncData } from '../../shared';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements AfterViewInit {
  @ViewChild("bm") bm: BuildMenuComponent;
  @ViewChild("om") om: OptionsMenuComponent;

  public lastState : SyncData;
  constructor(public gcs: GameClientService) {
    this.gcs.gameState.subscribe( s => this.lastState = s );
  }

  ngAfterViewInit() {
    console.log(this.bm);
    console.log(this.om);
  }

  onSlotClick(index: number) {
    //  if empty slot display build menu else options menu
    let building = this.lastState.city.buildings[index];
    if (building) {
      this.om.showMenu(building);
    } else {
      this.bm.showMenu(index);
    }
  }
}

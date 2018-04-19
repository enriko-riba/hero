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
  }

  private subscription;
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.subscription = this.gcs.gameState.subscribe( async s => this.lastState = await s );
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

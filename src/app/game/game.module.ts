import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CharacterComponent } from './character/character.component';
import { CityComponent } from '../game/city/city.component';
import { OverviewComponent } from './overview/overview.component';
import { SlotComponent } from './city/slot/slot.component';
import { BuildMenuComponent } from './city/build-menu/build-menu.component';
import { OptionsMenuComponent } from './city/options-menu/options-menu.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [CharacterComponent, CityComponent, OverviewComponent, SlotComponent, BuildMenuComponent, OptionsMenuComponent]
})
export class GameModule { }

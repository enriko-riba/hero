import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CharacterComponent } from './character/character.component';
import { CityComponent } from '../game/city/city.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  declarations: [CharacterComponent, CityComponent, OverviewComponent]
})
export class GameModule { }

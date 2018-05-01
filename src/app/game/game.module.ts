import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import {
	GameRoutingModule, MapComponent, OverviewComponent,
	CityComponent, CharacterComponent, SlotComponent,
	BuildMenuComponent, OptionsMenuComponent
} from './index';
import { AdventureComponent } from './adventure/adventure.component';
import { TravelComponent } from './travel/travel.component';

@NgModule({
	imports: [
		CommonModule,
		GameRoutingModule,
		SharedModule
	],
	declarations: [CharacterComponent, CityComponent, OverviewComponent, SlotComponent, BuildMenuComponent, OptionsMenuComponent, MapComponent, AdventureComponent, TravelComponent]
})
export class GameModule { }

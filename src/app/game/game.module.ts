import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import {
	GameRoutingModule, MapComponent, OverviewComponent,
	CityComponent, CharacterComponent, SlotComponent,
	BuildMenuComponent, OptionsMenuComponent
} from './index';

@NgModule({
	imports: [
		CommonModule,
		GameRoutingModule,
		SharedModule
	],
	declarations: [CharacterComponent, CityComponent, OverviewComponent, SlotComponent, BuildMenuComponent, OptionsMenuComponent, MapComponent]
})
export class GameModule { }

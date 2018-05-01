import { AdventureComponent } from './adventure/adventure.component';
import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CityComponent } from './city/city.component';
import { MapComponent } from './map/map.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'overview',
		pathMatch: 'full'
	},
	{
		path: 'overview',
		component: OverviewComponent
	},
	{
		path: 'character',
		component: CharacterComponent
	},
	{
		path: 'city',
		component: CityComponent
	},
	{
		path: 'map',
		component: MapComponent
	},

	{
		path: 'adventure',
		component: AdventureComponent
	},
	{
		path: 'travel',
		component: TravelComponent
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GameRoutingModule { }
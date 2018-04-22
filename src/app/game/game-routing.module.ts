import { OverviewComponent } from './overview/overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { CityComponent } from './city/city.component';
import { MapComponent } from './map/map.component';

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
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class GameRoutingModule { }
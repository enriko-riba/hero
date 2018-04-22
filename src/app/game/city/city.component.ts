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

	public buildingSlots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	constructor(public gcs: GameClientService) {
	}

	private subscription;
	ngOnDestroy() {
		if (this.subscription) this.subscription.unsubscribe();
	}

	ngAfterViewInit() {
		this.subscription = this.gcs.gameState.subscribe(async s => this._state = await s);
	}

	private _state;
	public get state(): SyncData {
		return this._state;
	}
	public set state(v) {
		this._state = v;
	}

	onSlotClick(index: number) {
		//  if empty slot display build menu else options menu
		let building = this.gcs.currentGameData.city.buildings[index];
		if (building) {
			this.om.showMenu(index);
		} else {
			this.bm.showMenu(index);
		}
	}
}

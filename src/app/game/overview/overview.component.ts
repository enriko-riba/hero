import { Component, AfterViewInit } from '@angular/core';
import { GameClientService } from '../../game-client.service';
import { SyncData, Builder, calcTimeLeft, Building } from '../../shared';

@Component({
	selector: 'app-overview',
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements AfterViewInit {

	constructor(private gcs: GameClientService) {
	}

	public calcTimeLeft = calcTimeLeft;
	public builders: Array<Builder>;
	
	private _state: SyncData;
	private subscription;

	ngOnDestroy() {
		if (this.subscription) this.subscription.unsubscribe();
	}

	ngAfterViewInit() {
		this.subscription = this.gcs.gameState.subscribe(async s => this.state = await s);
	}

	public get state(): SyncData {
		return this._state;
	}

	public set state(value) {
		this._state = value;
		if (this._state) {
			if (!this.builders) {
				this.builders = this._state.city.builders;
			}
			else {
				for (var i = 0; i < this._state.city.builders.length; i++) {
					this.builders[i].buildTimeLeft = this._state.city.builders[i].buildTimeLeft;
				}
			}
		}
	}

	public getAvailability(b: Builder) {
		let date = new Date(b.expires);
		if (date.getFullYear() > 9000) {
			return "available: permanent";
		} else {
			return "available: " + date.toDateString();
		}
	}

	public isBuilding(b: Builder) {
		return b.buildTimeLeft > 0;
	}
}

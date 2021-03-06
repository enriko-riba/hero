import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { GameClientService } from './../../../game-client.service';
import { Building, BuildingType, timeString, SyncData, calcTimeLeft, getImage } from '../../../shared';
import { map } from 'rxjs/operators';

@Component({
	selector: 'city-slot',
	templateUrl: './slot.component.html',
	styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements AfterViewInit {
	@Input() id: number;

	private lastState: SyncData;
	private building: Building;

	public timeLeft: string;
	public statusClass: string;
	public imageUrl: string;

	constructor(private gcs: GameClientService) {
	}

	private subscription;

	ngOnDestroy() {
		if (this.subscription) this.subscription.unsubscribe();
	}

	ngAfterViewInit() {
		this.subscription = this.gcs.gameState
			.pipe(map(s => s.city.buildings[this.id]))			
			.subscribe(this.updateState.bind(this));
	}

	private async updateState(building: Building) {
		let b = await building;
		this.timeLeft = calcTimeLeft(b);
		this.statusClass = this.getStatusClass(b);
		this.imageUrl = this.getImageUrl(b);
		this.building = b;
		if (b && b.buildTimeLeft > 0) {
			console.log('Slot id: ' + this.id + ', ' + b.name + ', state: ' + this.statusClass + ' : ' + b.buildTimeLeft + ', mid: ' + this.gcs.currentGameData.mid);
		}
	}

	

	private getStatusClass(b: Building) {
		if (!b)
			return "empty";
		else if (b.buildTimeLeft > 0)
			return "progress";
		else
			return "finished";
	}

	public getImageUrl(b: Building) {
		if (!b)
			return "assets/buttons/empty_slot.png";

		let isProgress = b.buildTimeLeft > 0;
		return isProgress ? "assets/buttons/hammer.png" : getImage(b);
	}

	public get level(): number {
		return this.building ? this.building.level : 0;
	}
}

export enum SlotState {
	Empty,
	InProgress,
	Finished
}
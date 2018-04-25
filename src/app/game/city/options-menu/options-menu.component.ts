import { Component, OnInit } from '@angular/core';
import { Building, timeString, 
		ProductionType, 
		getBuildingProductionString, 
		getBuildingProduction,
		getBuildingProductionTypeString, 
		BuildingType} from '../../../shared';
import { GameClientService } from '../../../game-client.service';

@Component({
	selector: 'city-options-menu',
	templateUrl: './options-menu.component.html',
	styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {
	public building: Building;
	public visible = false;
	public upgradeTime = (b: Building) => timeString(this.building.upgradeTime, 'ms');
	public getBuildingProductionString = getBuildingProductionString;
	private index: number;

	constructor(private gcs: GameClientService) { }

	ngOnInit() {
	}

	public onUpgradeClick() {
		if (this.canUpgrade()) {
			this.gcs.startBuildingUpgrade(this.index);
			this.close();
		}
	}

	public onDestroyClick() {
		this.gcs.startBuildingDestroy(this.index);
		this.close();
	}

	public canUpgrade(resId?: ProductionType) {
		return this.gcs.canUpgrade(this.building, resId);
	}

	public get destroyRefund() {
		return this.building.destroyRefund;
	}

	public getUpgradeProductionIncrease(){
		var prod = getBuildingProduction(this.building);
		var next = getBuildingProduction(this.building, this.building.level + 1 );
		var bpts = getBuildingProductionTypeString(this.building);
		if(this.building.type != BuildingType.Storage){
			return `+${(next - prod)*3600} ${bpts}/h`;
		}else{
			return `+${(next - prod)} ${bpts}`;
		}
	}

	public showMenu(index: number) {
		this.index = index;
		this.building = this.gcs.currentGameData.city.buildings[index];
		if (this.building.buildTimeLeft <= 0)
			this.visible = true;
		else
			console.warn('can not comply - upgrade in progress!');
	}

	public close() {
		this.visible = false;
	}

}

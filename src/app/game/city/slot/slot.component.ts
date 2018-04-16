import { GameClientService } from './../../../game-client.service';
import { Building } from './../../../Messages/Server2Client/Building';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'city-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {
  @Input() id: number;
  @Input() building: Building;

  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    console.log('id: ' +  this.id + ', building: ' + this.building.name);
  }

}

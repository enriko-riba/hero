import { Component, OnInit } from '@angular/core';
import { Building } from '../../../Messages/Server2Client/Building';
import { GameClientService } from '../../../game-client.service';

@Component({
  selector: 'city-build-menu',
  templateUrl: './build-menu.component.html',
  styleUrls: ['./build-menu.component.scss']
})
export class BuildMenuComponent implements OnInit {
  public visible = false;
  constructor(private gcs: GameClientService) { }

  ngOnInit() {
  }

  showMenu(building : Building){
    //  TODO: setup available building
    this.visible = true;
  }
}

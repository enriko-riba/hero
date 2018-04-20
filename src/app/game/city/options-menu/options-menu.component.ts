import { Component, OnInit } from '@angular/core';
import { Building } from '../../../shared';

@Component({
  selector: 'city-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {
  public building : Building;
  public visible = false;
  constructor() { }

  ngOnInit() {
  }

  showMenu(building : Building){
    this.building = building;
    this.visible = true;
  }

  close(){
    this.visible = false;
  }
}

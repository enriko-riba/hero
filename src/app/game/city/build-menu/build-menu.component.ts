import { Component, OnInit } from '@angular/core';
import { Building } from '../../../Messages/Server2Client/Building';

@Component({
  selector: 'city-build-menu',
  templateUrl: './build-menu.component.html',
  styleUrls: ['./build-menu.component.scss']
})
export class BuildMenuComponent implements OnInit {
  public test: string = "te";
  private top: number;
  private left: number;

  constructor() { }

  ngOnInit() {
  }

  initMenu(building : Building, x: number, y: number){
    this.top = y;
    this.left = x;
  }
}

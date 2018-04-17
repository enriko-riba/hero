import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'city-options-menu',
  templateUrl: './options-menu.component.html',
  styleUrls: ['./options-menu.component.scss']
})
export class OptionsMenuComponent implements OnInit {

  public test: string = "te";
  constructor() { }

  ngOnInit() {
  }

}

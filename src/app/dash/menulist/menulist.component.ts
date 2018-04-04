import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {
  @Input("canClick") canClick = false;
  constructor() { }

  ngOnInit() {
  }

  startClick() {
    console.log('start...');
  }
}

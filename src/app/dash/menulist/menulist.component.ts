import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {
  @Input("canClick") canClick = false;
  constructor(private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  startClick() {
    console.log('start...');
    this.router.navigate(['character/stats']);
  }
}

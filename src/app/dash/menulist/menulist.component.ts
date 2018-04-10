import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GameClientService } from '../../game-client.service';

@Component({
  selector: 'menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {
  @Input("canClick") canClick = false;
  constructor(private router: Router, private route: ActivatedRoute, private client: GameClientService) { }

  ngOnInit() {
  }

  startClick() {
    console.log('start...');
    this.client.initSocket();
    this.router.navigate(['character/stats']);
  }
}

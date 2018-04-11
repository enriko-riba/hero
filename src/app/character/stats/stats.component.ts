import { Component, OnInit } from '@angular/core';
import { GameClientService } from '../../game-client.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private gcs: GameClientService) { }

  ngOnInit() {
    this.gcs.onMessage().subscribe(data=> console.log(data));
  }

}

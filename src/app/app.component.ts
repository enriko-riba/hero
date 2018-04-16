import { GameClientService } from './game-client.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public client : GameClientService,
    private router: Router,
    private location: Location){
      console.log("url: '"+this.router.url+"'");
    }

    isBackButtonVisible(){
      return this.router.url != "/";
    }
    navigateBack(){
      this.location.back();
    }
}

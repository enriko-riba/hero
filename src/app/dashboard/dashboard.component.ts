import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
declare var googleyolo: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private status = "You are not signed-in!";

  constructor(private loginSvc: LoginService) { }

  ngOnInit() {
    this.loginSvc.loginUser().then( (credential)=>{
      console.log('sign in: ', credential);
      this.status = "Welcome " + credential.displayName;
    });
  }

}

import { LoginService, Status } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
declare var googleyolo: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isButtonSignInVisible : boolean = false;
  public isMenuVisible : boolean = false;
  public statusText = "Sign-in required!";

  constructor(private loginSvc: LoginService) {
  }

  ngOnInit() {
    this.loginSvc.status.subscribe(val => { 
      this.isButtonSignInVisible = (val != Status.SignedIn); 
      this.isMenuVisible = !this.isButtonSignInVisible;
    });

    this.signIn();
  }

  signIn(){
    this.isButtonSignInVisible = false;
    this.isMenuVisible = false;
    this.loginSvc.loginUser().then( (credential)=>{
      this.statusText = "Hi " + credential.displayName;
    }, (error)=> {
      if(error && error.type ==="userCanceled"){
        //this.status = Status.Canceled;
      }
    });
  }
}
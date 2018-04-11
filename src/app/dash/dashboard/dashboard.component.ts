import { LoginService, Status } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
declare var gapi: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  //  google button
  public isGoogleButtonEnabled : boolean = false;
  public googleText = "Google loading...";

  //  FB button
  public isFbButtonEnabled : boolean = false;
  public fbText = "FB loading...";


  public isMenuVisible : boolean = false;
  public statusText = "Sign-in required!";

  constructor(private loginSvc: LoginService) {
  }

  ngOnInit() {
    this.loginSvc.googleStatusState.subscribe(gs => { 
      console.log('Google status:', gs);
        this.isGoogleButtonEnabled = (gs != Status.Initializing);  
        if(gs === Status.SignedOut){
          this.googleText = "Google Sign in";
        }else if(gs === Status.SignedIn){
          this.loginSvc
              .googleAuthObject
              .then((auth)=> {
                let profile = auth.currentUser.get().getBasicProfile();
                this.googleText = "Continue as " + profile.getName();
              }
        )}
    });
  }

  signInGoogle(){
    this.isMenuVisible = false;
    this.loginSvc.signInGoogle().then( (user)=>{
      this.statusText = "Hi " + user.getBasicProfile().getName();
      this.isMenuVisible = true;
    }, (error)=> {
      console.error(error);
    });
  }  

  signOutGoogle() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  signInFacebook(){

  }
}
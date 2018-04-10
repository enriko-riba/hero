import { LoginService, Status } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
declare var googleyolo: any;
declare var gapi: any;

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
      }else if(error && error.type ==="noCredentialsAvailable"){
        gapi.load('auth2', function() {
          gapi.auth2.authorize({
            client_id: '679482392778-8gu33hgl4v7jaq8irc4ct9mi3u8o5g59.apps.googleusercontent.com',
            scope: 'email profile openid',
            response_type: 'id_token permission'
          }, (response)=> {
            if (response.error) {
              // An error happened!
              return;
            }
            // The user authorized the application for the scopes requested.
            var accessToken = response.access_token;
            var idToken = response.id_token;            
          }); // gapi.auth2.authorize
      }); //  gapi.load
      }
    });
  }
}
import { LoginService, ProviderStatus, AuthProvider } from './../../login.service';
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
  public isGoogleButtonEnabled: boolean = false;
  public googleText = "Google loading...";

  //  FB button
  public isFbButtonEnabled: boolean = false;
  public fbText = "FB loading...";


  public isMenuVisible: boolean = false;
  public statusText = "Sign-in required!";

  constructor(private loginSvc: LoginService) {
  }

  ngOnInit() {
    this.loginSvc.authStatus.subscribe(aus => this.handleProviderChange(aus));
    this.loginSvc.googleStatus.subscribe(status =>this.handleGoogleAccountChange(status));
  }

  private handleProviderChange(currentProvider: AuthProvider) {
    if (currentProvider === AuthProvider.None) {
      this.statusText = "Sign-in required!";
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  private handleGoogleAccountChange(status: ProviderStatus) {
    this.isGoogleButtonEnabled = (status != ProviderStatus.Initializing);
    if (status === ProviderStatus.SignedOut) {
      this.googleText = "Google Sign in";
    } else if (status === ProviderStatus.SignedIn) {
      let profile = this.loginSvc.googleAuthObject.currentUser.get().getBasicProfile();
      this.googleText = "Continue as " + profile.getName();
      this.statusText = "Hi " + profile.getName();
    }
  }


  signInGoogle() {
    this.isMenuVisible = false;
    this.loginSvc.signInGoogle().then((user) => {
      this.statusText = "Hi " + user.getBasicProfile().getName();
      this.isMenuVisible = true;
    }, (error) => {
      console.error(error);
    });
  }

  signOutGoogle() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  signInFacebook() {

  }
}
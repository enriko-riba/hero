import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

declare var gapi: any;

export var clientId = "679482392778-8gu33hgl4v7jaq8irc4ct9mi3u8o5g59.apps.googleusercontent.com";

const data = {
  supportedAuthMethods: [
    "https://accounts.google.com",
    "googleyolo://id-and-password"
  ],
  supportedIdTokenProviders: [
    {
      uri: "https://accounts.google.com",
      clientId: clientId
    }]
};

export enum Status {
  Initializing,
  SignedOut,
  SignedIn
}

@Injectable()
export class LoginService {
  private googleStatus: BehaviorSubject<Status> = new BehaviorSubject(Status.Initializing);

  private googleAuth: gapi.auth2.GoogleAuth;
  private loadedPromise: Promise<void>;

  constructor(private ngZone: NgZone) {
    this.loadedPromise = new Promise((resolve, reject) => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: clientId,
          scope: 'email profile openid'
        }).then(() => this.ngZone.run(() => {
            //  check google user status
            this.googleAuth = gapi.auth2.getAuthInstance();
            if (this.googleAuth.isSignedIn.get())
              this.googleStatus.next(Status.SignedIn);
            else
              this.googleStatus.next(Status.SignedOut);
            resolve();
          }) //  ngZone.run
        ); //  gapi.auth2.init 
      }); //  gapi.load('auth2'
    }); //  new Promise
  }

  public get googleStatusState() {
    return this.googleStatus.asObservable();
  }

  public get googleAuthObject() {
    let p = this.loadedPromise.then(() => {
      this.googleAuth = gapi.auth2.getAuthInstance();
      return this.googleAuth;
    });
    return p;
  }

  public signInGoogle(): Promise<gapi.auth2.GoogleUser> {
    let p = this.loadedPromise.then(() => {
      this.googleAuth = gapi.auth2.getAuthInstance();
      if (this.googleAuth.isSignedIn.get())
        return this.googleAuth.currentUser.get();
      else
        return this.googleAuth.signIn();
    });
    return p;
  }

  public get idToken(){
    return this.googleAuth.currentUser.get().getAuthResponse().id_token;
  }
}
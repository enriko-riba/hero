import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
declare var googleyolo: any;

const data = {
  supportedAuthMethods: [
    "https://accounts.google.com",
    "googleyolo://id-and-password"
  ],
  supportedIdTokenProviders: [
    {
      uri: "https://accounts.google.com",
      clientId: "679482392778-8gu33hgl4v7jaq8irc4ct9mi3u8o5g59.apps.googleusercontent.com"
    }]
};

export enum Status {
  SignedOut,
  SignedIn,
  Canceled,
  Error
}

@Injectable()
export class LoginService {
  private loginStatus : BehaviorSubject<Status> = new BehaviorSubject(Status.SignedOut);

  constructor() { }

  get status() {
    return this.loginStatus.asObservable();
  }

  loginUser(): Promise<any> {
    let p = googleyolo.hint(data);
    p.then((hintcredential) => {
      console.log('hint: ', hintcredential);
      console.log('token: ',hintcredential.idToken);
      this.loginStatus.next(Status.SignedIn);
      return hintcredential;
    }, (error)=>{
      console.log('hint error: ', error.message);
      let val = (error.type == 'userCanceled' ? Status.Canceled : Status.Error);
      this.loginStatus.next(val);
    });
    return p;
  }
}

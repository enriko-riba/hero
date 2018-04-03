import { Injectable } from '@angular/core';
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

@Injectable()
export class LoginService {

  private credential: any;

  constructor() { }

  loginUser(): Promise<any> {
    let p = googleyolo.hint(data);
    p.then((hintcredential) => {
      console.log('hint: ', hintcredential);
      this.credential = hintcredential;
      return hintcredential;
    });
    return p;
  }
}

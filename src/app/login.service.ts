import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var gapi: any;

export var clientId = "679482392778-8gu33hgl4v7jaq8irc4ct9mi3u8o5g59.apps.googleusercontent.com";

// const data = {
// 	supportedAuthMethods: [
// 		"https://accounts.google.com",
// 		"googleyolo://id-and-password"
// 	],
// 	supportedIdTokenProviders: [
// 		{
// 			uri: "https://accounts.google.com",
// 			clientId: clientId
// 		}]
// };

export enum AuthProvider {
	None,
	Google,
	Facebook
}

export enum ProviderStatus {
	Initializing,
	SignedOut,
	SignedIn
}

@Injectable()
export class LoginService {
	private authProviderStatus: BehaviorSubject<AuthProvider> = new BehaviorSubject(AuthProvider.None);
	private googleProviderStatus: BehaviorSubject<ProviderStatus> = new BehaviorSubject(ProviderStatus.Initializing);
	//private fbProviderStatus: BehaviorSubject<ProviderStatus> = new BehaviorSubject(ProviderStatus.Initializing);

	public currentUser: any;

	public googleLoadedPromise: Promise<void>;

	constructor(private zone: NgZone) {
		this.googleLoadedPromise = new Promise((resolve, reject) => {
			gapi.load('auth2', () => {
				gapi.auth2.init({
					client_id: clientId,
					scope: 'email profile openid'
				}).then(() => this.zone.run(() => {
					//  check google user status
					if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
						this.googleProviderStatus.next(ProviderStatus.SignedIn);
					}
					else {
						this.googleProviderStatus.next(ProviderStatus.SignedOut);
					}
					resolve();
				}) //  ngZone.run
				); //  gapi.auth2.init 
			}); //  gapi.load('auth2'
		}); //  new Promise

		//  TODO: check for FB account
	}


	//----------------------------------------------//
	//--------------- google related ---------------//
	//----------------------------------------------//

	/**
	 * 
	 */
	public get googleStatus() {
		return this.googleProviderStatus.asObservable();
	}

	/**
	 * 
	 */
	public get googleAuthObject(): gapi.auth2.GoogleAuth {
		return gapi.auth2.getAuthInstance();
	}

	/**
	 * 
	 */
	public signInGoogle(): Promise<gapi.auth2.GoogleUser> {
		let p = this.googleLoadedPromise.then(() => {
			let googleAuth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance();
			if (googleAuth.isSignedIn.get()) {
				let user = googleAuth.currentUser.get();
				this.handleGoogleLoginState(user);
				return user;
			} else {
				return googleAuth.signIn({ prompt: 'select_account' })
					.then(user => {
						this.handleGoogleLoginState(user);
						return user;
					});
			}
		});
		return p;
	}

	private handleGoogleLoginState(user: gapi.auth2.GoogleUser) {
		if (user) {
			this.authProviderStatus.next(AuthProvider.Google);
			this.googleProviderStatus.next(ProviderStatus.SignedIn);
			let bp = user.getBasicProfile();
			this.currentUser = {
				displayName : bp.getName(),
				email : bp.getEmail(),
			};
		} else {
			this.googleProviderStatus.next(ProviderStatus.SignedOut);
			this.currentUser = null;
		}
	}
	//----------------------------------------------//
	//-------------- eof google related ------------//
	//----------------------------------------------//



	//----------------------------------------------//
	//-------------- facebook related --------------//
	//----------------------------------------------//

	//----------------------------------------------//
	//------------ eof facebook related ------------//
	//----------------------------------------------//



	//------------- provider related ---------------//

	/**
	 * 
	 */
	public get authStatus() {
		return this.authProviderStatus.asObservable();
	}

	/**
	 * 
	 */
	public get token() {
		let current = this.authProviderStatus.getValue();
		if (current === AuthProvider.Google) {
			return gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;
		} else if (current === AuthProvider.Facebook) {
			//  TODO: FB
		} else {
			return null;
		}
	}

	/**
	 * 
	 */
	public signOut() {

		//  todo: check if google or FB signed in
		let current = this.authProviderStatus.getValue();
		if (current === AuthProvider.Google) {
			// this.googleAuthObject.then(auth => auth.signOut());
			this.googleAuthObject.signOut();
			this.googleProviderStatus.next(ProviderStatus.SignedOut);
		} else if (current === AuthProvider.Facebook) {
			//  TODO: sign out FB
		}
		this.authProviderStatus.next(AuthProvider.None);
	}
}
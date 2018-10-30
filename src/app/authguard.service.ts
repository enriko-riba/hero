import { CanActivate, Router } from "@angular/router";
import { LoginService, AuthProvider } from "./login.service";

export class AuthGuardService implements CanActivate /*, CanLoad */ {
	constructor(
		private loginSvc: LoginService,
		private router: Router) {
		this.loginSvc.authStatus.subscribe(ap => this.isSignedIn = ap != AuthProvider.None);
	}

	private isSignedIn: boolean;

	public canActivate() {
		if (!this.isSignedIn) {
			console.log('CanActivate guard prevented navigation!');
			this.router.navigate(['redirectToRoot']);
		}
		return this.isSignedIn;
	}
}
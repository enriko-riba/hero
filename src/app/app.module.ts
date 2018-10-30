import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { AuthGuardService } from './authguard.service';
import { GameClientService } from './game-client.service';
import { SharedModule } from './shared/shared.module';

import { ToastrModule } from 'ngx-toastr';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		SharedModule,
		ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production },),
		BrowserAnimationsModule,
		ToastrModule.forRoot( {
			"closeButton": false,
			"newestOnTop": true,
			"progressBar": true,
			"positionClass": "toast-top-right",
			"preventDuplicates": false,
			"timeOut": 6000,
			"extendedTimeOut": 1000,
			"easing": "swing"
		  }),
	],
	providers: [LoginService, GameClientService, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }

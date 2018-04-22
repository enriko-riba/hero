import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenulistComponent } from './menulist/menulist.component';

@NgModule({
	imports: [
		CommonModule,
		DashRoutingModule
	],
	declarations: [DashboardComponent, MenulistComponent]
})
export class DashModule { }

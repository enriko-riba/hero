import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './authguard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'app/dash/dash.module#DashModule'
  },
  {
    path: 'redirectToRoot',
    redirectTo: '/'
  },
  {
    path: 'game',
    canActivate: [AuthGuardService],
    loadChildren: 'app/game/game.module#GameModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

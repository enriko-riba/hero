import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './login.service';

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
    canActivate: [AuthGuard],
    loadChildren: 'app/game/game.module#GameModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

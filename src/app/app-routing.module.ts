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
    path: 'character',
    canActivate: [AuthGuard],
    loadChildren: 'app/character/character.module#CharacterModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

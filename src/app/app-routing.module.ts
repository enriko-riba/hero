import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'',
  //   component: DashboardComponent    
  // },
  {
    path: '',
    loadChildren: 'app/dash/dash.module#DashModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

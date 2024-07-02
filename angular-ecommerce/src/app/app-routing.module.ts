import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    loadChildren: ()=> import('./customer-view/customer-view.module').then(m=>m.CustomerViewModule),
  },
  { 
    path: 'admin',
    loadChildren: ()=> import('./admin-view/admin-view.module').then(m=>m.AdminViewModule),
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

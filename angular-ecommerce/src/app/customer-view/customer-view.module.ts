import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerViewRoutingModule } from './customer-view-routing.module';
import { HomePageComponent } from './main-pages/home-page/home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CustomerViewRoutingModule
  ]
})
export class CustomerViewModule { }

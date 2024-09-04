import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerViewRoutingModule } from './customer-view-routing.module';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    CustomerViewRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CustomerViewModule { }

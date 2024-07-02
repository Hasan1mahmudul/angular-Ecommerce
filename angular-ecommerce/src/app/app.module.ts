import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerViewModule } from './customer-view/customer-view.module';
import { AdminViewModule } from './admin-view/admin-view.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerViewModule,
    AdminViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

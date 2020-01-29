import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer/store/customer.reducer';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from './customer/store/customer.effect';
import { CustomerService } from './customer/service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('customers',CustomerReducer),
    EffectsModule.forRoot([CustomerEffect])
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

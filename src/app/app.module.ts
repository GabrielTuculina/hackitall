import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsModule } from './components/products/products.module';
import { MatCardModule } from '@angular/material/card';
import { PaymentComponent } from './components/payment/payment.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AddMoneyComponent } from './components/add-money/add-money.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    AddMoneyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

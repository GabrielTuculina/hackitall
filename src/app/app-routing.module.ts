import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddMoneyComponent } from './components/add-money/add-money.component';


const routes: Routes = [
  { path: 'select-products', component: ProductsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'addMoney', component: AddMoneyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

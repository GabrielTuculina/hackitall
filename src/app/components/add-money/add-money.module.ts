import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMoneyComponent } from './add-money.component';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    RouterModule
  ],
  declarations: [AddMoneyComponent]
})
export class ProductsModule { }

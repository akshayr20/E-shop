import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [AdminProductsComponent, OrdersComponent]
})
export class GroceryAdminModule {}

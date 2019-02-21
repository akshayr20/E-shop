import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrdersComponent } from './orders/orders.component';
import { GroceryAdminRoutingModule } from './grocery-admin.routes';

@NgModule({
  imports: [
    CommonModule,
    GroceryAdminRoutingModule
  ],
  declarations: [AdminProductsComponent, OrdersComponent]
})
export class GroceryAdminModule {}

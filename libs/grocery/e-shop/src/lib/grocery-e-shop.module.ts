import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryEShopRoutingModule } from './grocery-e-shop.route.module';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [CommonModule, GroceryEShopRoutingModule],
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsComponent,
    HomeComponent
  ]
})
export class GroceryEShopModule {}

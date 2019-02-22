import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryEShopRoutingModule } from './grocery-e-shop.route.module';
import { CommonUiModule } from '@e-shop/common/ui';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
@NgModule({
  imports: [CommonModule, CommonUiModule, GroceryEShopRoutingModule],
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsComponent,
    HomeComponent,
    ProductFilterComponent
  ]
})
export class GroceryEShopModule {}

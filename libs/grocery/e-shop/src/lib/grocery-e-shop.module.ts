import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroceryEShopRoutingModule } from './grocery-e-shop.route.module';
import { CommonUiModule } from '@e-shop/common/ui';
import { FormsModule } from '@angular/forms';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommonUiModule,
    GroceryEShopRoutingModule
  ],
  declarations: [
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsComponent,
    HomeComponent,
    ProductFilterComponent,
    ShippingFormComponent,
    ShoppingCartSummaryComponent
  ]
})
export class GroceryEShopModule {}

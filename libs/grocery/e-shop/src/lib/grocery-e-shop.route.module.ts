import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { CheckOutComponent } from './check-out/check-out.component';

import { OrderSuccessComponent } from './order-success/order-success.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'check-out',
        component: CheckOutComponent
      },
      {
        path: 'order-success',
        component: OrderSuccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryEShopRoutingModule {}

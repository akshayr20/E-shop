import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products'
      },
      {
        path: 'products/new',
        component: ProductFormComponent
      },
      {
        path: 'products/:id',
        component: ProductFormComponent
      },
      {
        path: 'products',
        component: AdminProductsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryAdminRoutingModule {}

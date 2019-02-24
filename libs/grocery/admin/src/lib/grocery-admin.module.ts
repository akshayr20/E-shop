import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { OrdersComponent } from './orders/orders.component';
import { GroceryAdminRoutingModule } from './grocery-admin.routes';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonUiModule } from '@e-shop/common/ui';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    CommonUiModule,
    GroceryAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ],
  declarations: [AdminProductsComponent, OrdersComponent, ProductFormComponent]
})
export class GroceryAdminModule {}

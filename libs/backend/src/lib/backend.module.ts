import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { ProductService } from './service/product.service';
import { OrderService } from './service/order.service';
import { ApiConfig } from './api-config';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [UserService, ProductService, OrderService]
})
export class BackendModule {
  static forRoot(rootUrl: string = ''): ModuleWithProviders {
    return {
      ngModule: BackendModule,
      providers: [{ provide: ApiConfig, useValue: { rootUrl } }]
    };
  }
}

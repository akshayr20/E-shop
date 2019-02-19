import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api-config';
import { Order } from '@e-shop/data-models/src';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _rootUrl = '';

  constructor(
    @Optional() private apiConfig: ApiConfig,
    private http: HttpClient
  ) {
    if (apiConfig) {
      this._rootUrl = `${apiConfig.rootUrl}/orders`;
    }
  }

  getAllOrders() {
    return this.http.get<Order[]>(`${this._rootUrl}`);
  }

  getOrderById(id: string) {
    return this.http.get<Order[]>(`${this._rootUrl}/${id}`);
  }

  createOrder(order: Order) {

  }

  updateOrderById() {}

  deleteOrderById() {}
}

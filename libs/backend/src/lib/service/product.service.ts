import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../api-config';
import { Product } from '@e-shop/data-models/src';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _rootUrl = '';

  constructor(
    @Optional() private apiConfig: ApiConfig,
    private http: HttpClient
  ) {
    if (apiConfig) {
      this._rootUrl = `${apiConfig.rootUrl}/products`;
    }
  }

  getAllProducts() {
    return this.http.get<Product[]>(`${this._rootUrl}`);
  }

  getProductById(id: string) {
    return this.http.get<Product[]>(
      `${this._rootUrl}/${encodeURIComponent(String(id))}`
    );
  }

  createProduct(order: Product) {}

  updateProductById() {}

  deleteProductById() {}
}

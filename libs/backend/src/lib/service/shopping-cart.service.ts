import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ShoppingCart, Product } from '@e-shop/data-models';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart$ = new BehaviorSubject('');
  constructor() {}

  async getCart() {
    return this.cart$;
  }

  async addToCart(product: Product) {}

  async removeFromCart(product: Product) {}

  async clearCart() {}

  private create() {}

  private getItem(cartId: string, productId: string) {}

  private async getOrCreateCartId() {}

  private async updateItem(product: Product, change: number) {}
}

import { Component, Input } from '@angular/core';
import { Product, ShoppingCart } from '@e-shop/data-models';
import { ShoppingCartService } from '@e-shop/backend';

@Component({
  selector: 'ui-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent {
  @Input() product: Product;
  @Input() shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product);
  }
}

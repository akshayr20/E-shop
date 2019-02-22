import { Component, Input } from '@angular/core';
import { Product, ShoppingCart } from '@e-shop/data-models';
import { ShoppingCartService } from '@e-shop/backend';

@Component({
  selector: 'ui-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;
  @Input() showActions = true;
  @Input() shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) {}

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}

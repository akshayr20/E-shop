import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '@e-shop/data-models/src';

@Component({
  selector: 'e-shop-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.scss']
})
export class ShoppingCartSummaryComponent implements OnInit {
  @Input() cart: ShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}

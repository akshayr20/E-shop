import { Component, OnInit } from '@angular/core';
import { Product, ShoppingCart, ShoppingCartItem } from '@e-shop/data-models';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'e-shop-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product = {
    _id: '123456',
    title: 'Almonds',
    imageUrl: './../assets/images/almonds.jpg',
    price: 20,
    category: 'Nuts'
  };
  cart: ShoppingCartItem = {
    _id: '123456',
    title: 'Almonds',
    imageUrl: '',
    price: 20,
    quantity: 2,
    totalPrice: 30
  };
  shoppingCart: ShoppingCart = new ShoppingCart({});

  category: string;
  filteredProducts: Product[] = [this.product, this.product, this.product];
  cart$: Subject<ShoppingCartItem> = new BehaviorSubject(this.cart);

  constructor() {}

  ngOnInit() {}
}

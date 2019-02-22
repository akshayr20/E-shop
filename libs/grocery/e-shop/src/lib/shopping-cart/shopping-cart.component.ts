import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'e-shop-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Subject<any> = new BehaviorSubject('');

  constructor() {}

  ngOnInit() {
    const item = {
      totalItemsCount: 2,
      items: [
        {
          imageUrl: './../assets/images/almonds.jpg',
          title: 'Almonds',
          totalPrice: 123
        },
        {
          imageUrl: './../assets/images/almonds.jpg',
          title: 'Cashew',
          totalPrice: 123
        }
      ],
      totalPrice: 246
    };
    this.cart$.next(item);
  }

  clearCart() {}
}

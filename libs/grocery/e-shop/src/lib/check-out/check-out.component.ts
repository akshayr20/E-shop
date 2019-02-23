import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '@e-shop/backend';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'e-shop-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  cart$: Subject<any> = new BehaviorSubject('');

  constructor(private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
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
    // this.cart$ = await this.shoppingCartService.getCart();
  }
}

import { Component } from '@angular/core';
import { UserService, OrderService } from '@e-shop/backend';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'e-shop-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent {
  orders$;

  constructor(
    private authService: UserService,
    private orderService: OrderService) {

    // this.orders$ = authService.user$.pipe(switchMap(u => orderService.getOrderByUser(u.uid)));
  }
}

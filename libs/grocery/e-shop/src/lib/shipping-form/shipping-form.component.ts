import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart, Order } from '@e-shop/data-models/src';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UserService, OrderService } from '@e-shop/backend/src';

@Component({
  selector: 'e-shop-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit {
  @Input() cart: ShoppingCart;
  shipping = {
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
  };
  userSubscription: Subscription;
  userId: string;

  constructor(
    private router: Router,
    private authService: UserService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    // this.userSubscription = this.authService.user$.subscribe(
    //   user => (this.userId = user.uid)
    // );
  }

  ngOnDestroy() {
    // this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.createOrder(order);
    this.router.navigate(['/order-success']);
  }
}

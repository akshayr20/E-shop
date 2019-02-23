import { Component, OnInit } from '@angular/core';
import { OrderService, ProductService, UserService } from '@e-shop/backend';
import { User } from '@e-shop/data-models';

@Component({
  selector: 'e-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
}

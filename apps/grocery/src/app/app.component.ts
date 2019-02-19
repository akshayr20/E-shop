import { Component, OnInit } from '@angular/core';
import { OrderService, ProductService, UserService } from '@e-shop/backend';
import { User } from '@e-shop/data-models';

@Component({
  selector: 'e-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'grocery';

  constructor(private _userService: UserService) {}

  ngOnInit() {
    const user: User = {
      email: 'akshay.rajput1@gmail.com',
      password: '123456'
    };
    // this._userService.signUp(user).subscribe(res => {
    //   console.log('res', res);
    // });
    this._userService.login(user).subscribe(res => {
      console.log(res);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@e-shop/backend';

@Component({
  selector: 'e-shop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ViewChild('f') loginForm;
  loginFailed = false;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    if (this.userService.isUserLoggedIn()) {
      this.router.navigateByUrl('user');
    }
  }

  authenticateUser() {
    // this.userService.authenticateUser(this.loginForm.value).subscribe((success) => {
    // 	if (success) {
    // 		this.router.navigateByUrl('project-summary');
    // 	}else {
    // 		this.loginFailed = true;
    // 	}
    // });
  }

  clickedOutSide() {
    this.router.navigateByUrl('/');
  }
}

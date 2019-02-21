import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'e-shop-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  clickedOutSide() {
    this.router.navigateByUrl('/');
  }
}

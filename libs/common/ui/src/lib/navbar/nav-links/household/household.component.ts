import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-household',
  templateUrl: './household.component.html',
  styleUrls: ['./household.component.scss']
})
export class HouseholdComponent implements OnInit {
  isDropDownVisible = false;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const product = {
  name: 'Almond',
  imageUrl: './../assets/images/almonds.jpg',
  price: 120
};

const PRODUCTS: Product[] = [];

for (let i = 0; i < 1000; i++) {
  PRODUCTS.push({ id: i, ...product });
}

@Component({
  selector: 'e-shop-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  page = 1;
  pageSize = 15;
  collectionSize = PRODUCTS.length;

  get products(): Product[] {
    return PRODUCTS.map(product => ({ ...product })).slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  }

  constructor() {}

  ngOnInit() {}

  deleteProduct(productId) {

  }
}

import { Component, Input } from '@angular/core';
import { ProductService } from '@e-shop/backend/src';

@Component({
  selector: 'e-shop-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent {
  categories$;
  @Input() category;

  constructor(productService: ProductService) {
    this.categories$ = productService.getAllCategories();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductService } from '@e-shop/backend/src';
import { take } from 'rxjs/operators';

@Component({
  selector: 'e-shop-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product;
  categories$: Subject<any> = new BehaviorSubject('');
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id)
      this.productService
        .getProductById(this.id)
        .pipe(take(1))
        .subscribe(p => (this.product = p));
  }

  ngOnInit() {}

  save(product) {
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.router.navigate(['/admin/products']);
  }
}

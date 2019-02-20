import { async, TestBed } from '@angular/core/testing';
import { GroceryFeatureProductsModule } from './grocery-feature-products.module';

describe('GroceryFeatureProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GroceryFeatureProductsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GroceryFeatureProductsModule).toBeDefined();
  });
});

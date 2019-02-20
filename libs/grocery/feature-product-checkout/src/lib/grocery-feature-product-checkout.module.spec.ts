import { async, TestBed } from '@angular/core/testing';
import { GroceryFeatureProductCheckoutModule } from './grocery-feature-product-checkout.module';

describe('GroceryFeatureProductCheckoutModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GroceryFeatureProductCheckoutModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GroceryFeatureProductCheckoutModule).toBeDefined();
  });
});

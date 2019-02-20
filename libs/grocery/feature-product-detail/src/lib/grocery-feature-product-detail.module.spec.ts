import { async, TestBed } from '@angular/core/testing';
import { GroceryFeatureProductDetailModule } from './grocery-feature-product-detail.module';

describe('GroceryFeatureProductDetailModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GroceryFeatureProductDetailModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GroceryFeatureProductDetailModule).toBeDefined();
  });
});

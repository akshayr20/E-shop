import { async, TestBed } from '@angular/core/testing';
import { GroceryEShopModule } from './grocery-e-shop.module';

describe('GroceryEShopModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GroceryEShopModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GroceryEShopModule).toBeDefined();
  });
});

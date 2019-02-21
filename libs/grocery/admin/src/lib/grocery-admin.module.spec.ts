import { async, TestBed } from '@angular/core/testing';
import { GroceryAdminModule } from './grocery-admin.module';

describe('GroceryAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GroceryAdminModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GroceryAdminModule).toBeDefined();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsListMyComponent } from './products-list-my.component';

describe('ProductsListMyComponent', () => {
  let component: ProductsListMyComponent;
  let fixture: ComponentFixture<ProductsListMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListMyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

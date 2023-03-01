import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListLastComponent } from './product-list-last.component';

describe('ProductListLastComponent', () => {
  let component: ProductListLastComponent;
  let fixture: ComponentFixture<ProductListLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListLastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

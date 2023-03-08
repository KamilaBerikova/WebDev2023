import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailedComponent } from './album-detailed.component';

describe('AlbumDetailedComponent', () => {
  let component: AlbumDetailedComponent;
  let fixture: ComponentFixture<AlbumDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

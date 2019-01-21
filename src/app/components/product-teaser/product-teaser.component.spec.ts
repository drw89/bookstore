import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTeaserComponent } from './product-teaser.component';

describe('ProductTeaserComponent', () => {
  let component: ProductTeaserComponent;
  let fixture: ComponentFixture<ProductTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowwarproductsComponent } from './showwarproducts.component';

describe('ShowwarproductsComponent', () => {
  let component: ShowwarproductsComponent;
  let fixture: ComponentFixture<ShowwarproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowwarproductsComponent]
    });
    fixture = TestBed.createComponent(ShowwarproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

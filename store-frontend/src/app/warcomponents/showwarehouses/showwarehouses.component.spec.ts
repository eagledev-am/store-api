import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowwarehousesComponent } from './showwarehouses.component';

describe('ShowwarehousesComponent', () => {
  let component: ShowwarehousesComponent;
  let fixture: ComponentFixture<ShowwarehousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowwarehousesComponent]
    });
    fixture = TestBed.createComponent(ShowwarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

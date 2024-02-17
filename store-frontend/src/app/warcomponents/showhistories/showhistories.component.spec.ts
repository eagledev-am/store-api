import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhistoriesComponent } from './showhistories.component';

describe('ShowhistoriesComponent', () => {
  let component: ShowhistoriesComponent;
  let fixture: ComponentFixture<ShowhistoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowhistoriesComponent]
    });
    fixture = TestBed.createComponent(ShowhistoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

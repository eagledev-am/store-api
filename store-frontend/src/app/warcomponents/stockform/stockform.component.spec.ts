import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockformComponent } from './stockform.component';

describe('StockformComponent', () => {
  let component: StockformComponent;
  let fixture: ComponentFixture<StockformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockformComponent]
    });
    fixture = TestBed.createComponent(StockformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

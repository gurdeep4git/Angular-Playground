import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTableUiComponent } from './order-table-ui.component';

describe('OrderTableUiComponent', () => {
  let component: OrderTableUiComponent;
  let fixture: ComponentFixture<OrderTableUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTableUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTableUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipOrdersComponent } from './ship-orders.component';

describe('ShipOrdersComponent', () => {
  let component: ShipOrdersComponent;
  let fixture: ComponentFixture<ShipOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

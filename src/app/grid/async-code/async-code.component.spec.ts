import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncCodeComponent } from './async-code.component';

describe('AsyncCodeComponent', () => {
  let component: AsyncCodeComponent;
  let fixture: ComponentFixture<AsyncCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

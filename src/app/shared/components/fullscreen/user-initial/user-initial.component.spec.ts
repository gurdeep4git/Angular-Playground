import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInitialComponent } from './user-initial.component';

describe('UserInitialComponent', () => {
  let component: UserInitialComponent;
  let fixture: ComponentFixture<UserInitialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInitialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

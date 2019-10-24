import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuAccComponent } from './nav-menu-acc.component';

describe('NavMenuAccComponent', () => {
  let component: NavMenuAccComponent;
  let fixture: ComponentFixture<NavMenuAccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavMenuAccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavMenuAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

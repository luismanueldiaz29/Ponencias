import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulFacultadComponent } from './consul-facultad.component';

describe('ConsulFacultadComponent', () => {
  let component: ConsulFacultadComponent;
  let fixture: ComponentFixture<ConsulFacultadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulFacultadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

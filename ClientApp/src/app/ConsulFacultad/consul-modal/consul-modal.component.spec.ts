import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulModalComponent } from './consul-modal.component';

describe('ConsulModalComponent', () => {
  let component: ConsulModalComponent;
  let fixture: ComponentFixture<ConsulModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

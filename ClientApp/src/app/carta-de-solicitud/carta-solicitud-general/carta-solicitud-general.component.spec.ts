import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaSolicitudGeneralComponent } from './carta-solicitud-general.component';

describe('CartaSolicitudGeneralComponent', () => {
  let component: CartaSolicitudGeneralComponent;
  let fixture: ComponentFixture<CartaSolicitudGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaSolicitudGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaSolicitudGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

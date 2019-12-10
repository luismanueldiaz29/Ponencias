import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaSolicitudAdminComponent } from './carta-solicitud-admin.component';

describe('CartaSolicitudAdminComponent', () => {
  let component: CartaSolicitudAdminComponent;
  let fixture: ComponentFixture<CartaSolicitudAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaSolicitudAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaSolicitudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

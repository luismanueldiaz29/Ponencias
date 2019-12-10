import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSolicitudAdminComponent } from './detalle-solicitud-admin.component';

describe('DetalleSolicitudAdminComponent', () => {
  let component: DetalleSolicitudAdminComponent;
  let fixture: ComponentFixture<DetalleSolicitudAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSolicitudAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

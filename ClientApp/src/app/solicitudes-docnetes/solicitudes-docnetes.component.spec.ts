import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesDocnetesComponent } from './solicitudes-docnetes.component';

describe('SolicitudesDocnetesComponent', () => {
  let component: SolicitudesDocnetesComponent;
  let fixture: ComponentFixture<SolicitudesDocnetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesDocnetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesDocnetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

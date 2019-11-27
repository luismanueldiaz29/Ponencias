import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFacultadComponent } from './registrar-facultad.component';

describe('RegistrarFacultadComponent', () => {
  let component: RegistrarFacultadComponent;
  let fixture: ComponentFixture<RegistrarFacultadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarFacultadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarFacultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEventoComponent } from './consulta-evento.component';

describe('ConsultaEventoComponent', () => {
  let component: ConsultaEventoComponent;
  let fixture: ComponentFixture<ConsultaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

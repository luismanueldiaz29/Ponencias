import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfromacionEventoComponent } from './infromacion-evento.component';

describe('InfromacionEventoComponent', () => {
  let component: InfromacionEventoComponent;
  let fixture: ComponentFixture<InfromacionEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfromacionEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfromacionEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

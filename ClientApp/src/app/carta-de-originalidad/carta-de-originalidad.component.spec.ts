import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDeOriginalidadComponent } from './carta-de-originalidad.component';

describe('CartaDeOriginalidadComponent', () => {
  let component: CartaDeOriginalidadComponent;
  let fixture: ComponentFixture<CartaDeOriginalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaDeOriginalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaDeOriginalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

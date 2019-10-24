import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDeDerechoComponent } from './carta-de-derecho.component';

describe('CartaDeDerechoComponent', () => {
  let component: CartaDeDerechoComponent;
  let fixture: ComponentFixture<CartaDeDerechoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaDeDerechoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaDeDerechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioFinancieroComponent } from './formulario-financiero.component';

describe('FormularioFinancieroComponent', () => {
  let component: FormularioFinancieroComponent;
  let fixture: ComponentFixture<FormularioFinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioFinancieroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

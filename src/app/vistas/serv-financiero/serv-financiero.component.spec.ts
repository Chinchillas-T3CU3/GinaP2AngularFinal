import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServFinancieroComponent } from './serv-financiero.component';

describe('ServFinancieroComponent', () => {
  let component: ServFinancieroComponent;
  let fixture: ComponentFixture<ServFinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServFinancieroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

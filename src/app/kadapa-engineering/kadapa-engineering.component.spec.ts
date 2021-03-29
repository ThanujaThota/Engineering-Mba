import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadapaEngineeringComponent } from './kadapa-engineering.component';

describe('KadapaEngineeringComponent', () => {
  let component: KadapaEngineeringComponent;
  let fixture: ComponentFixture<KadapaEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KadapaEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KadapaEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

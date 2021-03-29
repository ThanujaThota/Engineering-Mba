import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnaEngineeringComponent } from './krishna-engineering.component';

describe('KrishnaEngineeringComponent', () => {
  let component: KrishnaEngineeringComponent;
  let fixture: ComponentFixture<KrishnaEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrishnaEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrishnaEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

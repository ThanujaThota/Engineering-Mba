import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizianagaramEngineeringComponent } from './vizianagaram-engineering.component';

describe('VizianagaramEngineeringComponent', () => {
  let component: VizianagaramEngineeringComponent;
  let fixture: ComponentFixture<VizianagaramEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizianagaramEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizianagaramEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizagEngineeringComponent } from './vizag-engineering.component';

describe('VizagEngineeringComponent', () => {
  let component: VizagEngineeringComponent;
  let fixture: ComponentFixture<VizagEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizagEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizagEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

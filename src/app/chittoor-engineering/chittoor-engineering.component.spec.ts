import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittoorEngineeringComponent } from './chittoor-engineering.component';

describe('ChittoorEngineeringComponent', () => {
  let component: ChittoorEngineeringComponent;
  let fixture: ComponentFixture<ChittoorEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChittoorEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChittoorEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakasamEngineeringComponent } from './prakasam-engineering.component';

describe('PrakasamEngineeringComponent', () => {
  let component: PrakasamEngineeringComponent;
  let fixture: ComponentFixture<PrakasamEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrakasamEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakasamEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

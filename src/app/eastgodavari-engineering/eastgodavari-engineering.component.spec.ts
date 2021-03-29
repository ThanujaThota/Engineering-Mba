import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastgodavariEngineeringComponent } from './eastgodavari-engineering.component';

describe('EastgodavariEngineeringComponent', () => {
  let component: EastgodavariEngineeringComponent;
  let fixture: ComponentFixture<EastgodavariEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastgodavariEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastgodavariEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrikakulamEngineeringComponent } from './srikakulam-engineering.component';

describe('SrikakulamEngineeringComponent', () => {
  let component: SrikakulamEngineeringComponent;
  let fixture: ComponentFixture<SrikakulamEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrikakulamEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrikakulamEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

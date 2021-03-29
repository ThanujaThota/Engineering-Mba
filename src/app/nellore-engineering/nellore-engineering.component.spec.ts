import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NelloreEngineeringComponent } from './nellore-engineering.component';

describe('NelloreEngineeringComponent', () => {
  let component: NelloreEngineeringComponent;
  let fixture: ComponentFixture<NelloreEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NelloreEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NelloreEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

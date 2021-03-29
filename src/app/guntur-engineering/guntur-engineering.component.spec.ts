import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunturEngineeringComponent } from './guntur-engineering.component';

describe('GunturEngineeringComponent', () => {
  let component: GunturEngineeringComponent;
  let fixture: ComponentFixture<GunturEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunturEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunturEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

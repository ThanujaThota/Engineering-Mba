import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurnoolEngineeringComponent } from './kurnool-engineering.component';

describe('KurnoolEngineeringComponent', () => {
  let component: KurnoolEngineeringComponent;
  let fixture: ComponentFixture<KurnoolEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurnoolEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurnoolEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

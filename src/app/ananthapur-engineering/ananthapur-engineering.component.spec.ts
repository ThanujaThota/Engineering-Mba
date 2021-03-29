import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnanthapurEngineeringComponent } from './ananthapur-engineering.component';

describe('AnanthapurEngineeringComponent', () => {
  let component: AnanthapurEngineeringComponent;
  let fixture: ComponentFixture<AnanthapurEngineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnanthapurEngineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnanthapurEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

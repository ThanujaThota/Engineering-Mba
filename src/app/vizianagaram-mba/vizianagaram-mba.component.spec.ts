import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizianagaramMbaComponent } from './vizianagaram-mba.component';

describe('VizianagaramMbaComponent', () => {
  let component: VizianagaramMbaComponent;
  let fixture: ComponentFixture<VizianagaramMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizianagaramMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizianagaramMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

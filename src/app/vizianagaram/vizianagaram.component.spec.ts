import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizianagaramComponent } from './vizianagaram.component';

describe('VizianagaramComponent', () => {
  let component: VizianagaramComponent;
  let fixture: ComponentFixture<VizianagaramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizianagaramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizianagaramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

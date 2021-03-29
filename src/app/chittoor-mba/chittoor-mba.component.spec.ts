import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittoorMbaComponent } from './chittoor-mba.component';

describe('ChittoorMbaComponent', () => {
  let component: ChittoorMbaComponent;
  let fixture: ComponentFixture<ChittoorMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChittoorMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChittoorMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

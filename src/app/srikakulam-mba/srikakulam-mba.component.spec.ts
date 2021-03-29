import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrikakulamMbaComponent } from './srikakulam-mba.component';

describe('SrikakulamMbaComponent', () => {
  let component: SrikakulamMbaComponent;
  let fixture: ComponentFixture<SrikakulamMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrikakulamMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrikakulamMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

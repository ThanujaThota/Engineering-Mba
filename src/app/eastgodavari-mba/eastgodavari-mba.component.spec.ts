import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastgodavariMbaComponent } from './eastgodavari-mba.component';

describe('EastgodavariMbaComponent', () => {
  let component: EastgodavariMbaComponent;
  let fixture: ComponentFixture<EastgodavariMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastgodavariMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastgodavariMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

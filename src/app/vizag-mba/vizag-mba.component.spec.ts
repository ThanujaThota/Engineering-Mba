import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizagMbaComponent } from './vizag-mba.component';

describe('VizagMbaComponent', () => {
  let component: VizagMbaComponent;
  let fixture: ComponentFixture<VizagMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizagMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VizagMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

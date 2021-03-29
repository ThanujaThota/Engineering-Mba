import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakasamMbaComponent } from './prakasam-mba.component';

describe('PrakasamMbaComponent', () => {
  let component: PrakasamMbaComponent;
  let fixture: ComponentFixture<PrakasamMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrakasamMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakasamMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

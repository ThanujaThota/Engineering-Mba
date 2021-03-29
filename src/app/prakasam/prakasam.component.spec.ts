import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrakasamComponent } from './prakasam.component';

describe('PrakasamComponent', () => {
  let component: PrakasamComponent;
  let fixture: ComponentFixture<PrakasamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrakasamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrakasamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnanthapurMbaComponent } from './ananthapur-mba.component';

describe('AnanthapurMbaComponent', () => {
  let component: AnanthapurMbaComponent;
  let fixture: ComponentFixture<AnanthapurMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnanthapurMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnanthapurMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

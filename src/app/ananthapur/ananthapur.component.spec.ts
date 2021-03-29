import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnanthapurComponent } from './ananthapur.component';

describe('AnanthapurComponent', () => {
  let component: AnanthapurComponent;
  let fixture: ComponentFixture<AnanthapurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnanthapurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnanthapurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

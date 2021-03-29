import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadapaMbaComponent } from './kadapa-mba.component';

describe('KadapaMbaComponent', () => {
  let component: KadapaMbaComponent;
  let fixture: ComponentFixture<KadapaMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KadapaMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KadapaMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurnoolMbaComponent } from './kurnool-mba.component';

describe('KurnoolMbaComponent', () => {
  let component: KurnoolMbaComponent;
  let fixture: ComponentFixture<KurnoolMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurnoolMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurnoolMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

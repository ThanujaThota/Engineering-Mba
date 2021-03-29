import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunturMbaComponent } from './guntur-mba.component';

describe('GunturMbaComponent', () => {
  let component: GunturMbaComponent;
  let fixture: ComponentFixture<GunturMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunturMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunturMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

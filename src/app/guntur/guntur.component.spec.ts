import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunturComponent } from './guntur.component';

describe('GunturComponent', () => {
  let component: GunturComponent;
  let fixture: ComponentFixture<GunturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GunturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GunturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrikakulamComponent } from './srikakulam.component';

describe('SrikakulamComponent', () => {
  let component: SrikakulamComponent;
  let fixture: ComponentFixture<SrikakulamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrikakulamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrikakulamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EastgodavariComponent } from './eastgodavari.component';

describe('EastgodavariComponent', () => {
  let component: EastgodavariComponent;
  let fixture: ComponentFixture<EastgodavariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EastgodavariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EastgodavariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

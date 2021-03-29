import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NelloreMbaComponent } from './nellore-mba.component';

describe('NelloreMbaComponent', () => {
  let component: NelloreMbaComponent;
  let fixture: ComponentFixture<NelloreMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NelloreMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NelloreMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

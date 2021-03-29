import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WestgodavariComponent } from './westgodavari.component';

describe('WestgodavariComponent', () => {
  let component: WestgodavariComponent;
  let fixture: ComponentFixture<WestgodavariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WestgodavariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WestgodavariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChittoorComponent } from './chittoor.component';

describe('ChittoorComponent', () => {
  let component: ChittoorComponent;
  let fixture: ComponentFixture<ChittoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChittoorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChittoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

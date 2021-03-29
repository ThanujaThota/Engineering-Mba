import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishnaMbaComponent } from './krishna-mba.component';

describe('KrishnaMbaComponent', () => {
  let component: KrishnaMbaComponent;
  let fixture: ComponentFixture<KrishnaMbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrishnaMbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrishnaMbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

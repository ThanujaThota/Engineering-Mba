import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KadapaComponent } from './kadapa.component';

describe('KadapaComponent', () => {
  let component: KadapaComponent;
  let fixture: ComponentFixture<KadapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KadapaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KadapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

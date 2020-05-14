import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiOperaterComponent } from './detalji-operater.component';

describe('DetaljiOperaterComponent', () => {
  let component: DetaljiOperaterComponent;
  let fixture: ComponentFixture<DetaljiOperaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiOperaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiOperaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

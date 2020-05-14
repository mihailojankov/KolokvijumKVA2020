import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiPaketComponent } from './detalji-paket.component';

describe('DetaljiPaketComponent', () => {
  let component: DetaljiPaketComponent;
  let fixture: ComponentFixture<DetaljiPaketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiPaketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiPaketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

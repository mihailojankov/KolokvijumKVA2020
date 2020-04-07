import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaDodeljenogPravaComponent } from './izmena-dodeljenog-prava.component';

describe('IzmenaDodeljenogPravaComponent', () => {
  let component: IzmenaDodeljenogPravaComponent;
  let fixture: ComponentFixture<IzmenaDodeljenogPravaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaDodeljenogPravaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaDodeljenogPravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

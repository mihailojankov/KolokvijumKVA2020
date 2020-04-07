import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaPravaPristupaComponent } from './izmena-prava-pristupa.component';

describe('IzmenaPravaPristupaComponent', () => {
  let component: IzmenaPravaPristupaComponent;
  let fixture: ComponentFixture<IzmenaPravaPristupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaPravaPristupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaPravaPristupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

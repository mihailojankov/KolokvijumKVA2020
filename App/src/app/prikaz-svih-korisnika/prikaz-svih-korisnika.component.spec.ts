import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazSvihKorisnikaComponent } from './prikaz-svih-korisnika.component';

describe('PrikazSvihKorisnikaComponent', () => {
  let component: PrikazSvihKorisnikaComponent;
  let fixture: ComponentFixture<PrikazSvihKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazSvihKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazSvihKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

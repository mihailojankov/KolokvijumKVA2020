import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikSablonComponent } from './korisnik-sablon.component';

describe('KorisnikSablonComponent', () => {
  let component: KorisnikSablonComponent;
  let fixture: ComponentFixture<KorisnikSablonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikSablonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikSablonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazSvihPaketaComponent } from './prikaz-svih-paketa.component';

describe('PrikazSvihPaketaComponent', () => {
  let component: PrikazSvihPaketaComponent;
  let fixture: ComponentFixture<PrikazSvihPaketaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazSvihPaketaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazSvihPaketaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

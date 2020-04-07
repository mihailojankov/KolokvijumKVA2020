import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PravoPristupaSablonComponent } from './pravo-pristupa-sablon.component';

describe('PravoPristupaSablonComponent', () => {
  let component: PravoPristupaSablonComponent;
  let fixture: ComponentFixture<PravoPristupaSablonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravoPristupaSablonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PravoPristupaSablonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SablonZaBrojComponent } from './sablon-za-broj.component';

describe('SablonZaBrojComponent', () => {
  let component: SablonZaBrojComponent;
  let fixture: ComponentFixture<SablonZaBrojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SablonZaBrojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SablonZaBrojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

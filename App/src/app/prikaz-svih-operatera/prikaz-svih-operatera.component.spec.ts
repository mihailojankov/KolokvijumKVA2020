import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazSvihOperateraComponent } from './prikaz-svih-operatera.component';

describe('PrikazSvihOperateraComponent', () => {
  let component: PrikazSvihOperateraComponent;
  let fixture: ComponentFixture<PrikazSvihOperateraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazSvihOperateraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazSvihOperateraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateSingleComponent } from './estate-single.component';

describe('EstateSingleComponent', () => {
  let component: EstateSingleComponent;
  let fixture: ComponentFixture<EstateSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

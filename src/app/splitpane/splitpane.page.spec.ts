import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitpanePage } from './splitpane.page';

describe('SplitpanePage', () => {
  let component: SplitpanePage;
  let fixture: ComponentFixture<SplitpanePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitpanePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitpanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

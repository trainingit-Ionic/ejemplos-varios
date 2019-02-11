import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPage } from './ui.page';

describe('UiPage', () => {
  let component: UiPage;
  let fixture: ComponentFixture<UiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

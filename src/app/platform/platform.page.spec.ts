import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformPage } from './platform.page';

describe('PlatformPage', () => {
  let component: PlatformPage;
  let fixture: ComponentFixture<PlatformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

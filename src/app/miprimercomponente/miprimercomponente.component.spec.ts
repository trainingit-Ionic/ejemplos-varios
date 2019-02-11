import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiprimercomponenteComponent } from './miprimercomponente.component';

describe('MiprimercomponenteComponent', () => {
  let component: MiprimercomponenteComponent;
  let fixture: ComponentFixture<MiprimercomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiprimercomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiprimercomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

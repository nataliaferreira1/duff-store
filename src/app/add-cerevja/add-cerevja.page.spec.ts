import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCerevjaPage } from './add-cerevja.page';

describe('AddCerevjaPage', () => {
  let component: AddCerevjaPage;
  let fixture: ComponentFixture<AddCerevjaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCerevjaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCerevjaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

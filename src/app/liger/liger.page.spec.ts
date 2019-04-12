import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigerPage } from './liger.page';

describe('LigerPage', () => {
  let component: LigerPage;
  let fixture: ComponentFixture<LigerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

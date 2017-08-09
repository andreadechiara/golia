/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InserimentordineComponent } from './inserimentordine.component';

describe('InserimentordineComponent', () => {
  let component: InserimentordineComponent;
  let fixture: ComponentFixture<InserimentordineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserimentordineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserimentordineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

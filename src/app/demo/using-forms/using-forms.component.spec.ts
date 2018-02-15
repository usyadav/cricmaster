import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingFormsComponent } from './using-forms.component';

describe('UsingFormsComponent', () => {
  let component: UsingFormsComponent;
  let fixture: ComponentFixture<UsingFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

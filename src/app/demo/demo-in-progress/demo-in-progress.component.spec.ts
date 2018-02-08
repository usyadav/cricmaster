import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoInProgressComponent } from './demo-in-progress.component';

describe('DemoInProgressComponent', () => {
  let component: DemoInProgressComponent;
  let fixture: ComponentFixture<DemoInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

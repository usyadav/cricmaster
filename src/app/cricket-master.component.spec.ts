import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketMasterComponent } from './cricket-master.component';

describe('CricketMasterComponent', () => {
  let component: CricketMasterComponent;
  let fixture: ComponentFixture<CricketMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

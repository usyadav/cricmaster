import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInfoDemoComponent } from './player-info-demo.component';

describe('PlayerInfoDemoComponent', () => {
  let component: PlayerInfoDemoComponent;
  let fixture: ComponentFixture<PlayerInfoDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInfoDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInfoDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerListDemoComponent } from './player-list-demo.component';

describe('PlayerListDemoComponent', () => {
  let component: PlayerListDemoComponent;
  let fixture: ComponentFixture<PlayerListDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerListDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

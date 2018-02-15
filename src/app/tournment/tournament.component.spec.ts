import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentComponentComponent } from './tournament-component.component';

describe('TournamentComponentComponent', () => {
  let component: TournamentComponentComponent;
  let fixture: ComponentFixture<TournamentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

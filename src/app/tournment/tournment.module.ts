import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports :[TournamentComponent],
  declarations: [TournamentComponent]
})
export class TournmentModule { }

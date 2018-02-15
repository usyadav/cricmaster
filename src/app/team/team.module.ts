import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports : [TeamComponent],
  declarations: [TeamComponent]
})
export class TeamModule { }

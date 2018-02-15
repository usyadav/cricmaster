import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ManagePlayerComponent } from './manage-player/manage-player.component';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [ManagePlayerComponent, PlayerComponent],
  exports : [PlayerComponent]
})
export class PlayerModule { }

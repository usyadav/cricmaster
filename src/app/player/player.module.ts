import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { ManagePlayerComponent } from './manage-player/manage-player.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [ManagePlayerComponent],
  exports : [ManagePlayerComponent]
})
export class PlayerModule { }

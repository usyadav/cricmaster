import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdvancedComponent } from './advanced/advanced.component';
import { PlayerListDemoComponent } from './player-list-demo/player-list-demo.component';
import { PlayerInfoDemoComponent } from './player-info-demo/player-info-demo.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [AdvancedComponent, PlayerListDemoComponent, PlayerInfoDemoComponent],
  exports:[AdvancedComponent]
})
export class ComponentAdvancedModule { }

import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { PlayerService }  from './player.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,BrowserModule
  ],
  declarations: [ServiceDemoComponent],
  providers:[PlayerService],
  exports: [ServiceDemoComponent]
})
export class UsingServicesModule { }

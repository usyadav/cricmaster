import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CricketMasterComponent} from './cricket-master.component';

@NgModule({
  imports: [ BrowserModule ], //modules to use
  exports:[], //exported members will be used in other modules
  declarations: [CricketMasterComponent], //members used in html declerations i.e(component,directives,pipes)
  providers:[], //services to be injected,will lazily initialize.
  bootstrap:[CricketMasterComponent] // component inserted in DOM during,entry point of module
})
export class TrainingModule { }


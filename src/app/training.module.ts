import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { DemoModule } from './demo/demo.module';

import { CricketMasterComponent } from './cricket-master.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DummyComponentComponent } from './dummy-component/dummy-component.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule , DemoModule,AppRoutingModule], //modules to use
  exports: [], //exported members will be used in other modules
  declarations: [ CricketMasterComponent,PageNotFoundComponent,HomeComponent,DummyComponentComponent], //members used in html declerations i.e(component,directives,pipes)
  providers: [{ provide: LOCALE_ID, useValue: 'de' }], //services to be injected,will lazily initialize.
  bootstrap: [CricketMasterComponent] // component inserted in DOM during,entry point of module
})
export class TrainingModule { }


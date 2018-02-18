import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { RouterModule} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './../angular-material.module';
import { DemoRouteModule } from './demo-route.module';
import { SharedModule } from './../shared/shared.module';
import { DemoComponent } from './demo.component';
import { BindingDemoComponent } from './data-binding/binding-demo.component';
import { DirectiveDemoComponent } from './using-directives/directive-demo.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { RoutingDemoComponent } from './routing-demo/routing-demo.component';
import { UsingFormsComponent } from './using-forms/using-forms.component';
import { DemoInProgressComponent } from './demo-in-progress/demo-in-progress.component';

@NgModule({
  imports: [
    CommonModule , FormsModule, BrowserModule, SharedModule, BrowserAnimationsModule,AngularMaterialModule,DemoRouteModule
  ],
  declarations: [DemoComponent, DemoInProgressComponent,CustomDirectiveComponent,UsingFormsComponent
    ,RoutingDemoComponent]
  ,exports: [DemoComponent]
})
export class DemoModule { }

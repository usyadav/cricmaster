import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoComponent } from './demo.component';
import { DataBindingModule } from './data-binding/data-binding.module';
import { UsingDirectivesModule } from './using-directives/using-directives.module';
import { AngularMaterialModule } from './../angular-material.module';
import { DemoRouteModule } from './demo-route.module';

@NgModule({
  imports: [
    CommonModule,DataBindingModule,UsingDirectivesModule,RouterModule,
    BrowserAnimationsModule,AngularMaterialModule,DemoRouteModule  
  ],
  declarations: [DemoComponent],
  exports: [DemoComponent]
})
export class DemoModule { }

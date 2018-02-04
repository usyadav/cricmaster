import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingDemoComponent } from './binding-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BindingDemoComponent],
  exports: [BindingDemoComponent]
})
export class DataBindingModule { }

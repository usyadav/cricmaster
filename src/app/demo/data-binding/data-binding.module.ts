import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BindingDemoComponent } from './binding-demo.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [BindingDemoComponent],
  exports: [BindingDemoComponent]
})
export class DataBindingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ObservablesDemoComponent } from './observables-demo.component';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [ObservablesDemoComponent]
})
export class UsingObservablesModule { }

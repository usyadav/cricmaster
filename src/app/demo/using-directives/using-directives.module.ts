import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDemoComponent } from './directive-demo.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,SharedModule
  ],
  declarations: [DirectiveDemoComponent],
  exports:[DirectiveDemoComponent]
})
export class UsingDirectivesModule { }

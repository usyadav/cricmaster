import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { HighlightWithColorDirective } from './highlight-with-color.directive';
import { HighlightWithEventDirective } from './highlight-with-event.directive';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HighlightDirective, HighlightWithColorDirective,HighlightWithEventDirective, ConvertToSpacesPipe],
  exports : [HighlightDirective, HighlightWithColorDirective,HighlightWithEventDirective,ConvertToSpacesPipe],
  providers:[ConvertToSpacesPipe]
})
export class SharedModule { }

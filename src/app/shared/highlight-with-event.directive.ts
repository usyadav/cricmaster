import { Directive, ElementRef, HostListener,Renderer,Input } from '@angular/core';

@Directive({
  selector: '[appHighlightWithEvent]'
})
export class HighlightWithEventDirective {
  @Input('appHighlightWithEvent') dynamicColor: string;
  @Input() defaultValue: string;

  constructor(private elRef: ElementRef) {
  }
  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor(this.dynamicColor || this.defaultValue);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }
  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }  
}

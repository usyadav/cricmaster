import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlightWithColor]'
})
export class HighlightWithColorDirective implements AfterViewInit {
  @Input() tcolor: string;
  @Input() tsize: string;

  constructor(private el: ElementRef) {

  }
  ngAfterViewInit(): void {
    this.tcolor = this.tcolor || 'green';
    this.tsize = this.tsize || '20px';
    this.el.nativeElement.style.color = this.tcolor;
    this.el.nativeElement.style.fontSize = this.tsize;
  }
}

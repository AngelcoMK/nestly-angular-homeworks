import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]'
})
export class HighlightCardDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.el.nativeElement.style.transform = 'translateY(-4px)';
    this.el.nativeElement.style.boxShadow =
      '0 8px 20px rgba(0, 0, 0, 0.12)';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.el.nativeElement.style.transform = '';
    this.el.nativeElement.style.boxShadow = '';
  }
}
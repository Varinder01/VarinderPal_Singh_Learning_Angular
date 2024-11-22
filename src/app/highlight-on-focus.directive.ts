import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {

  @Input() focusColor: string = 'lightblue';

  private originalBackgroundColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus() {
    // Save the original background color before changing
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor || '';

    // Set the background color to the focus color
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.focusColor);
  }

  @HostListener('blur') onBlur() {
    // Revert to the original background color on blur
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackgroundColor);
  }
}

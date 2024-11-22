import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlighthover]',
  standalone: true
})
export class HighlighthoverDirective {
  @Input() hoverColor: string = ''; // Input for hover color
  @Input() textHover: boolean = false; // Determine if the text color should change

  private originalColor: string = '';
  private originalBackgroundColor: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.originalColor = this.el.nativeElement.style.color;
    this.originalBackgroundColor = this.el.nativeElement.style.backgroundColor;

    if (this.textHover) {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.hoverColor || 'blue');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.hoverColor || 'yellow');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.originalColor);
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.originalBackgroundColor);
  }
}

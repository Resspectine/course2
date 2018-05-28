import {Directive, ElementRef, HostListener} from '@angular/core';
import { debounce } from 'decko';

@Directive({selector: '[sticky]'})
export class StickyDirective {
  private offsetY: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  @debounce(50)
  checkScroll(event: Event) {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= componentPosition) {
      if (!this.offsetY) {
        this.offsetY = componentPosition;
      }
      if (scrollPosition >= this.offsetY) {
        this.el.nativeElement.style.position = 'fixed';
        this.el.nativeElement.style.top = '0';
      } else {
        this.el.nativeElement.style.position = '';
      }
    }
  }
}

import { Directive, Output, HostListener, ElementRef, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[diClickOutside]'
})
export class ClickOutsideDirective {
  @Output() public diClickOutside = new EventEmitter<MouseEvent | TouchEvent>();
  @Input() public disabled: boolean = false;

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event', '$event.target'])
  @HostListener('document:touchstart', ['$event', '$event.target'])
  public onClick(event: MouseEvent | TouchEvent, targetElement: HTMLElement): void {
    if (!targetElement || this.disabled) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.diClickOutside.emit(event);
    }
  }

  ngOnDestroy() {
    this.diClickOutside.unsubscribe();
  }
}

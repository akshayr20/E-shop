import { Directive, Output, HostListener, ElementRef, EventEmitter, Input } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[diClickOutside]'
})
export class ClickOutsideDirective {
  @Output() public diClickedOutside = new EventEmitter<MouseEvent | TouchEvent>();
  @Input() public disabled: boolean = false;
  private clickEvent$: Subject<MouseEvent> = new Subject<MouseEvent>();
	private subscription: Subscription;
	private clickTimer: any;
  private isLoaded = false;

  constructor(private elementRef: ElementRef) {
		clearTimeout(this.clickTimer);
		this.clickTimer = setTimeout(() => {
			this.isLoaded = true;
		}, 100);

		this.subscription = this.clickEvent$
			.pipe(debounceTime(300))
			.subscribe(event => {
				this.diClickedOutside.emit(event);
			});
  }

  @HostListener('document:click', ['$event', '$event.target'])
  @HostListener('document:touchstart', ['$event', '$event.target'])
  public onClick(event: MouseEvent | TouchEvent, targetElement: HTMLElement): void {
    if (!this.isLoaded ||!targetElement || this.disabled) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.diClickedOutside.emit(event);
    }
  }

  ngOnDestroy() {
    this.diClickedOutside.unsubscribe();
    clearTimeout(this.clickTimer);
		this.subscription.unsubscribe();
  }
}

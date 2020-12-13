import { Directive, ElementRef } from '@angular/core';
import { interval, Subject } from 'rxjs';

export const headerSubject: Subject<boolean> = new Subject();

@Directive({
  selector: '[appHeaderBackground]'
})
export class HeaderBackgroundDirective {
  private cur: number;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.cur = this.el.nativeElement.getBoundingClientRect().top;

    interval(1000)
      .subscribe(() => {
        if (this.cur !== this.el.nativeElement.getBoundingClientRect().top) {
          this.cur = this.el.nativeElement.getBoundingClientRect().top;
          this.cur < 0 ? headerSubject.next(true) : headerSubject.next(false);
        }
      });
  }
}

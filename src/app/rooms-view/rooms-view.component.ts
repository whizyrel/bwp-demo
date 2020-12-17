import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-view',
  templateUrl: './rooms-view.component.html',
  styleUrls: ['./rooms-view.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('open', style({opacity: 0})),
      state('close', style({opacity: 1})),
      transition('* => *', [
        animate('1s', keyframes([
          style({ opacity: 0 }),
          style({ opacity: 1 })
        ]))
      ]),
      transition('* => *', [
        animate('1s', keyframes([
          style({ opacity: 1 }),
          style({ opacity: 0 })
        ]))
      ])
    ]),
  ]
})
export class RoomsViewComponent implements OnInit {
  private imgLength = 8;
  public currImage = 1;
  public roomType: string;
  public fadeIn = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currImage = parseInt(window.localStorage.getItem('lv'), 10) || 1;

    this.activatedRoute.url.subscribe((urlSegment): void => {
      this.roomType = urlSegment[0].path.split('-').join(' ');
    });
  }

  public navigateButton(dir: number): void {
    // 0 - left, 1 - right
    dir === 0 ? --this.currImage : ++this.currImage;
    // dir === 0 ?
    //   (/* this.slideRight = true,  */this.slideLeft = true/* , this.slideLeft = true */) :
    //   (/* this.slideLeft = true,  */this.slideRight = true/* , this.slideRight = true */);
    // this.fadeIn = false;
    this.fadeIn = true;

    if (dir === 0 ? this.currImage === 0 : this.currImage > this.imgLength) {
      this.currImage = this.currImage === 0 ? this.imgLength : 1;
    }

    window.localStorage.setItem('lv', this.currImage.toString());
    this.fadeIn = false;
  }

  public focusAlternateComment(el: HTMLElement): void {
    if (el !== undefined) {
      el.scrollIntoView();
    }
  }
}

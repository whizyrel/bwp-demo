import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

import { HeaderBackgroundDirective } from '../directives/header-background.directive';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  public form: FormGroup;
  public roomsOverlay: { [key in string]: boolean } = {
    deluxe: false, mandela: false, obama: false, holiday: false, vacation: false, executive: false
  };
  @ViewChild(HeaderBackgroundDirective, {static: true}) private el;

  constructor(private fb: FormBuilder, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      subject: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required])
    });
  }

  public scrollToTop(): void {
    this.el.el.nativeElement.scrollIntoView(true);
  }

  public viewRoom(type: string) {
    this.router.navigate(['/', type]);
  }

  public submitMessage(): void {
    if (this.form.valid === true) {
      setTimeout(() => {
        this.snackbar.open(`${this.form.getRawValue().name}, we've received your message. Thank you!`, 'close');
      }, 3000);
    }
  }

  public toggleOverlay(el: string): void {
    this.roomsOverlay[el] = !this.roomsOverlay[el];
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({});
  }

  public toggleOverlay(el: string): void {
    this.roomsOverlay[el] = !this.roomsOverlay[el];
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.scss']
})
export class HomeBodyComponent implements OnInit {
  public form: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({});
  }
}

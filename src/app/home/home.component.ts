import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public drawerState: boolean = false as boolean;

  constructor() { }

  ngOnInit() { }

  public openDrawer(): void {
    this.drawerState = !this.drawerState;
  }
}

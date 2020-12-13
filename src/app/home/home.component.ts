import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { headerSubject } from '../directives/header-background.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public drawerState: boolean = false as boolean;
  public headerBackgroundStatus: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    headerSubject.subscribe((status: boolean): void => {
      this.headerBackgroundStatus = status;
    });
  }

  public openDrawer(): void {
    this.drawerState = !this.drawerState;
  }

  public navigateTo(path: string): void {
    // possible add central loading progress bar
    this.router.navigate(['/'], {preserveFragment: false, fragment: path});
  }
}

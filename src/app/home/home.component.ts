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
  private activatedComponent;

  constructor(private router: Router) { }

  ngOnInit() {
    headerSubject.subscribe((status: boolean): void => {
      this.headerBackgroundStatus = status;
    });
  }

  public onActivate(component): void {
    this.activatedComponent = component;
  }

  public routeToHome(): void {
    // scroll into view if at /    
    if (/#[a-z]{1,}/gi.test(this.router.url) === true) {
      this.activatedComponent.scrollToTop();
    } else {
      this.router.navigate(['/']);
    }
  }

  public openDrawer(): void {
    this.drawerState = !this.drawerState;
  }

  public navigateTo(path: string): void {
    // possible add central loading progress bar
    if (path !== 'home') {
      this.router.navigate(['/'], {preserveFragment: false, fragment: path});
    } else {
      this.activatedComponent.scrollToTop();
    }
  }
}

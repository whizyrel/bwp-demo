import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-icons',
  templateUrl: './social-media-icons.component.html',
  styleUrls: ['./social-media-icons.component.scss']
})
export class SocialMediaIconsComponent implements OnInit {
  @Input() public icon: string;
  public width: string = '24px';
  public height: string = '24px';

  constructor() { }

  ngOnInit() { }
}

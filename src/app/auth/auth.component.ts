import {Component, Input, OnInit} from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'msa-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private media: MediaObserver) { }

  @Input() isVisible = true;
  visibility = 'shown';

  sideNavOpened = true;
  matDrawerOpened = false;
  matDrawerShow = true;
  sideNavMode = 'side';

  static getRouteAnimation(outlet) {

    return outlet.activatedRouteData.animation;
    // return outlet.isActivated ? outlet.activatedRoute : ''
  }

  ngOnChanges() {
    this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

  ngOnInit() {
    this.media.media$.subscribe((mediaChange: MediaChange) => {
      this.toggleView();
    });
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = true;
      this.matDrawerOpened = false;
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.sideNavMode = 'side';
      this.sideNavOpened = false;
      this.matDrawerOpened = true;
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.sideNavMode = 'over';
      this.sideNavOpened = false;
      this.matDrawerOpened = false;
      this.matDrawerShow = false;
    }
  }

}

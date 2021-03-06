import { Component, OnInit } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'msa-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss']
})
export class FullscreenComponent implements OnInit {

  isFullscreen = false;
  constructor() { }

  ngOnInit() {
  }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }

  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'msa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material3';

  getRouteAnimation(outlet) {

    return outlet.activatedRouteData.animation;
  }
}

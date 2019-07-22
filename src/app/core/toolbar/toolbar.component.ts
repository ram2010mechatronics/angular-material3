import {Component, Input, OnInit} from '@angular/core';
import {ToolbarHelpers} from './toolbar.helpers';

@Component({
  selector: 'msa-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() sidenav;
  @Input() sidebar;
  @Input() drawer;
  @Input() matDrawerShow;

  searchOpen = false;
  toolbarHelpers = ToolbarHelpers;
  constructor() { }

  ngOnInit() {
  }


}

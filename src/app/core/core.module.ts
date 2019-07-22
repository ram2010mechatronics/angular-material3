import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatRadioModule, MatToolbarModule, MatInputModule} from '@angular/material';
import { CoreRoutingModule } from './core-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SidemenuItemComponent } from './sidemenu-item/sidemenu-item.component';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [ToolbarComponent, SearchBarComponent, FullscreenComponent, SidebarComponent,
    SidemenuComponent, SidemenuItemComponent, ToolbarNotificationComponent, UserMenuComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    PerfectScrollbarModule
  ],

  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class CoreModule { }

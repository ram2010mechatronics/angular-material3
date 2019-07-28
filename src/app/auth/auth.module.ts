import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    PerfectScrollbarModule,
    CoreModule
  ]
})
export class AuthModule { }

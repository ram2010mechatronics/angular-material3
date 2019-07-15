import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatButtonModule, MatIconModule, MatRadioModule, MatToolbarModule} from '@angular/material';
import {CoreRoutingModule} from './core-routing.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule
  ]
})
export class CoreModule { }

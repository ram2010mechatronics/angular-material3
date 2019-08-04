import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import {
  MatCheckboxModule, MatChipsModule,
  MatFormFieldModule,
  MatInputModule, MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [StudentsListComponent, EnrollmentComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MatFormFieldModule,
    MatTableModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatChipsModule
  ]
})
export class StudentsModule { }

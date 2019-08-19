import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
  MatCardModule,
  MatGridListModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSelectModule,
  MatNativeDateModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BasicDetailsComponent} from './basic-details/basic-details.component';
import {AddressDetailsComponent} from './address-details/address-details.component';
import {GuardianDetailsComponent} from './guardian-details/guardian-details.component';
import {ContactDetailsComponent} from './contact-details/contact-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [StudentsListComponent, EnrollmentComponent, BasicDetailsComponent,
    AddressDetailsComponent, GuardianDetailsComponent, ContactDetailsComponent],
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
    MatChipsModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    HttpClientModule,
    MatNativeDateModule,
    MatButtonModule,
  ]
})
export class StudentsModule { }

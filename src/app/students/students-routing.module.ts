import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnrollmentComponent} from './enrollment/enrollment.component';
import {StudentsListComponent} from './students-list/students-list.component';

const routes: Routes = [
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'students-list', component: StudentsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }

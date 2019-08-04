import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent ,
    children: [{ path: 'students', loadChildren: () => import('../students/students.module').then(mod => mod.StudentsModule) },]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

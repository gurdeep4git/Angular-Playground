import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsComponent } from './friends/friends.component';
import { JobFormComponent } from './job-form/job-form.component';

const routes: Routes = [
  {
    path: 'friends',
    component: FriendsComponent,
    pathMatch: 'full',
  },
  {
    path: 'job',
    component: JobFormComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'job',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicFormRoutingModule { }

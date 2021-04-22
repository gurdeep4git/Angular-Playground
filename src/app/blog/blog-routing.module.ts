import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: PostDetailComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

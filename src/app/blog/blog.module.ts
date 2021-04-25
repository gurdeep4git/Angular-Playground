import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';
import { SharedModule } from '../shared/shared.module';
import { BlogService } from './blog.service';
import { AddEditPostComponent } from './blog/add-edit-post/add-edit-post.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { RatingComponent } from './blog/post-detail/rating/rating.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    PostDetailComponent,
    AddEditPostComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BlogRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [BlogService],
})
export class BlogModule {}

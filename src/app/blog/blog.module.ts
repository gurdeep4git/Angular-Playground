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

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { RatingComponent } from './blog/post-detail/rating/rating.component';
import { AddEditCommentComponent } from './blog/post-detail/add-edit-comment/add-edit-comment.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    BlogComponent,
    PostComponent,
    PostDetailComponent,
    AddEditPostComponent,
    RatingComponent,
    AddEditCommentComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    BlogRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [BlogService, BsModalService],
})
export class BlogModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './blog/post/post.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';
import { SharedModule } from '../shared/shared.module';
import { BlogService } from './blog.service';
@NgModule({
  declarations: [BlogComponent, PostComponent, PostDetailComponent],
  imports: [CommonModule, SharedModule, BlogRoutingModule],
  providers: [BlogService],
})
export class BlogModule {}

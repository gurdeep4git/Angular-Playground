import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { Post } from '../../../shared/models/post.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  postId: number;
  postDetails: Post;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.postId = +params.params.id;
    });

    this.blogService.getPostDetails(this.postId);

    this.blogService.postsDetails$.subscribe((postDetails: Post) => {
      this.postDetails = postDetails;
    });
  }

  getImageUrl() {
    return `url(${this.postDetails.imageUrl})`;
  }

  likePost(postId: number) {
    this.postDetails.rating = this.postDetails.rating + 1;
    this.blogService
      .likePost(postId, this.postDetails)
      .subscribe((postDetails: Post) => {
        this.blogService.updatePostDetailsSource(postDetails);
      });
  }
}

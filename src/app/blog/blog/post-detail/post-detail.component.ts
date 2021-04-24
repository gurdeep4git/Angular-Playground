import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { Post } from '../../../shared/models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  postId: number;
  postDetails: Post;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: Params) => {
      this.postId = +params.params.id;
    });

    this.getPostDetails();
  }

  getPostDetails() {
    this.apiService
      .get(`/posts/${this.postId}?_embed=comments`)
      .subscribe((postDetails: Post) => {
        console.log(postDetails);
        this.postDetails = postDetails;
      });
  }

  getImageUrl() {
    return `url(${this.postDetails.imageUrl})`;
  }
}

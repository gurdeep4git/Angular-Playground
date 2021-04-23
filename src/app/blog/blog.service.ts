import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../shared/api.service';
import { Post } from '../shared/models/post.model';

@Injectable()
export class BlogService {
  private postsSource$ = new BehaviorSubject<Post[]>([]);
  public posts$ = this.postsSource$.asObservable();

  constructor(private apiService: ApiService) {}

  public updatePostsSource(posts: Post[]) {
    this.postsSource$.next(posts);
  }

  public getPosts(page: number, limit: number) {
    return this.apiService
      .get(`/posts?_page=${page}&_limit=${limit}&_sort=sortOrder&_order=desc`)
      .subscribe((posts: Post[]) => this.updatePostsSource(posts));
  }
}

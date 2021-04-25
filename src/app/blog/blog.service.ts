import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Post } from '../shared/models/post.model';

@Injectable()
export class BlogService {
  public maxSortOrder: number = 0;

  private postsSource$ = new BehaviorSubject<Post[]>([]);
  public posts$ = this.postsSource$.asObservable();

  private postDetailsSource$ = new BehaviorSubject<Post>(null);
  public postsDetails$ = this.postDetailsSource$.asObservable();

  constructor(private apiService: ApiService) {}

  get maxPostSortOrder(): number {
    const order = localStorage.getItem('maxSortOrder');
    return +order;
  }

  set maxPostSortOrder(sortOrder) {
    this.maxSortOrder = sortOrder;
    localStorage.setItem('maxSortOrder', JSON.stringify(this.maxSortOrder));
  }

  public updatePostsSource(posts: Post[]) {
    this.postsSource$.next(posts);
  }

  public updatePostDetailsSource(post: Post) {
    this.postDetailsSource$.next(post);
  }

  public getPosts(page: number, limit: number) {
    return this.apiService
      .get(`/posts?_page=${page}&_limit=${limit}&_sort=sortOrder&_order=desc`)
      .subscribe((posts: Post[]) => this.updatePostsSource(posts));
  }

  public savePost(post: Post): Observable<unknown> {
    return this.apiService.post(`/posts`, post);
  }

  public updatePost(postId: number, post: Post): Observable<unknown> {
    return this.apiService.put(`/posts/${postId}`, post);
  }

  public getPostById(postId: number): Observable<unknown> {
    return this.apiService.get(`/posts/${postId}`);
  }

  public likePost(postId: number, post: Post): Observable<unknown> {
    return this.apiService.put(`/posts/${postId}`, post);
  }
}

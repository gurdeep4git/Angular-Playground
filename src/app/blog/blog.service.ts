import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { Comment, Post } from '../shared/models/post.model';

@Injectable()
export class BlogService {
  public page = 1;
  public limit = 5;

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

  public getPostDetails(postId: number) {
    const postDetails = this.apiService.get(`/posts/${postId}?_embed=comments`);
    const comments = this.apiService.get(`/comments?_expand=user`);

    forkJoin([postDetails, comments]).subscribe((res) => {
      const postDetails = this.appendUsersInPost(res[0], res[1]);
      this.updatePostDetailsSource(postDetails);
    });

    // this.apiService
    //   .get(`/posts/${postId}?_embed=comments`)
    //   .subscribe((postDetails: Post) => {
    //     this.updatePostDetailsSource(postDetails);
    //   });
  }

  private appendUsersInPost(postDetails: any, comments: any) {
    const updatedComments = postDetails.comments.map((c: Comment) => {
      return comments.filter((cc: Comment, i: number) => {
        if (cc.id === c.id) {
          //@ts-ignore
          return (c['user'] = cc.user);
        }
      });
    });

    updatedComments.map((com) => {
      postDetails = { ...postDetails, ...com };
    });

    return postDetails;
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

  public deletePost(postId: number): Observable<unknown> {
    return this.apiService.delete(`/posts/${postId}`);
  }

  public addComment(comment: Comment): Observable<unknown> {
    return this.apiService.post(`/comments`, comment);
  }
}

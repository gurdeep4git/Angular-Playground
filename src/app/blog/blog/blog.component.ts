import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Post } from './../../shared/models/post.model';
import { delay, tap } from 'rxjs/operators';
import { BlogService } from '../blog.service';
import { FullscreenService } from './../../shared/services/fullscreen.service';
import { Observable } from 'rxjs/internal/Observable';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { OrderBy } from '../../shared/enums';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  // animations: [
  //   trigger('fullscreenAnimation', [
  //     state(
  //       'initial',
  //       style({
  //         top: '-100%',
  //       })
  //     ),
  //     state(
  //       'final',
  //       style({
  //         top: '0',
  //       })
  //     ),
  //     transition('initial=>final', animate('1000ms')),
  //   ]),
  // ],
})
export class BlogComponent implements OnInit {
  page: number;
  limit: number;
  backDays: number = 10;

  noMorePosts: boolean;
  isLoading: boolean;

  posts: Post[];
  recentPosts: Post[];
  popularPosts: Post[];

  isFullscreenShown$: Observable<boolean>;
  //animationState: string;

  constructor(
    private blogService: BlogService,
    private apiService: ApiService,
    private fullscreenService: FullscreenService
  ) {
    this.isFullscreenShown$ = this.fullscreenService.isFullscreenShown$;
  }

  ngOnInit(): void {
    //this.animationState = 'initial';
    this.page = this.blogService.page;
    this.limit = this.blogService.limit;

    this.getPosts();
  }

  openFullscreen() {
    // this.animationState =
    //   this.animationState === 'initial' ? 'final' : 'initial';
    this.fullscreenService.show();
  }

  loadMorePosts() {
    this.page = this.page + 1;

    const orderBy = this.getOrderBy();

    this.apiService
      .get(
        `/posts?_page=${this.page}&_limit=${this.limit}&_sort=sortOrder&_order=${orderBy}`
      )
      .pipe()
      .subscribe((posts: Post[]) => {
        if (posts.length === 0) {
          this.noMorePosts = true;
          setTimeout(() => {
            this.noMorePosts = false;
          }, 3000);
          return;
        }
        this.posts = [...this.posts, ...posts];
      });
  }

  onFullscreenSubmit(): void {
    const orderBy = this.getOrderBy();

    this.blogService.getPosts(this.page, this.limit, undefined, orderBy);
    this.fullscreenService.hide();
  }

  private getOrderBy() {
    let orderBy: string;
    const order = this.blogService.orderByProperty;

    if (order == OrderBy.Descending) {
      orderBy = 'desc';
    } else {
      orderBy = 'asc';
    }

    return orderBy;
  }

  private getPosts() {
    this.isLoading = true;
    this.blogService.getPosts(this.page, this.limit);
    this.blogService.posts$
      .pipe(
        tap((posts: Post[]) => {
          this.isLoading = true;
          this.blogService.maxPostSortOrder = Math.max(
            ...posts.map((p) => p.sortOrder)
          );
          this.popularPosts = this.getPopularPosts(posts);
          this.recentPosts = this.getRecentPosts(posts);
        }),
        delay(3000)
      )
      .subscribe((posts: Post[]) => {
        this.isLoading = false;
        this.posts = posts;
      });
  }

  private getPopularPosts(posts: Post[]): Post[] {
    return posts.filter((p) => p.rating >= 3).splice(0, 3);
  }

  private getRecentPosts(posts: Post[]): Post[] {
    const backDate = this.getBackDate(this.backDays);

    return posts
      .filter((p) => {
        const pDate = new Date(p.createdDate);
        if (pDate > backDate) {
          return p;
        }
      })
      .splice(0, 3);
  }

  private getBackDate(day: number): Date {
    const today = new Date();
    const daysAgo = today.getDate() - day;
    const backDate = new Date(today.getFullYear(), today.getMonth(), daysAgo);
    return backDate;
  }
}

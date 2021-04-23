import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { Post, PostFormData } from '../../../shared/models/post.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss'],
})
export class AddEditPostComponent implements OnInit {
  postForm: FormGroup;
  imageUrlDropdown: number[] = [];
  savedSuccess: boolean;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initImageUrlDropdown();
    this.initForm();
  }

  onSubmit(formData: PostFormData) {
    if (!this.postForm.valid) {
      return;
    }
    const model = this.mapModel(formData);
    this.save(model);
  }

  private save(model: Post) {
    this.blogService
      .savePost(model)
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.postForm.reset();
          this.blogService.getPosts(1, 3);
          this.savedSuccess = true;
          setTimeout(() => {
            this.savedSuccess = false;
            this.router.navigate(['../'], { relativeTo: this.route });
          }, 3000);
        }
      });
  }

  private initImageUrlDropdown() {
    for (let i = 1001; i <= 1040; i++) {
      this.imageUrlDropdown.push(i);
    }
  }

  private initForm() {
    this.postForm = this.fb.group({
      title: [null],
      body: [null],
      imageUrl: [this.imageUrlDropdown[0]],
      topics: [null],
    });
  }

  private mapModel(formData: PostFormData): Post {
    const post = new Post();
    post.id = this.getRandomId();
    post.userId = 1;
    post.title = formData.title;
    post.body = formData.body;
    post.imageUrl = this.getImageUrl(+formData.imageUrl);
    post.createdDate = this.getDate();
    post.topics = this.getTopics(formData.topics);
    post.rating = 0;
    post.sortOrder = this.blogService.maxPostSortOrder + 1;
    return post;
  }

  private getTopics(topics: string): string[] {
    return topics.split(',');
  }

  private getImageUrl(imageUrl: number): string {
    return `https://picsum.photos/id/${imageUrl}/500/500`;
  }

  private getDate(): string {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const date = new Date();
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (100 - 1) + 1);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Comment } from '../../../../shared/models/post.model';
import { StateService } from '../../../../shared/services/state.service';
import { BlogService } from '../../../blog.service';

@Component({
  selector: 'app-add-edit-comment',
  templateUrl: './add-edit-comment.component.html',
  styleUrls: ['./add-edit-comment.component.scss'],
})
export class AddEditCommentComponent implements OnInit {
  commentForm: FormGroup;
  @Input() postId: number;

  constructor(
    private fb: FormBuilder,
    private blogService: BlogService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.commentForm = this.fb.group({
      comment: [null],
    });
  }

  addComment(formData: any) {
    if (!this.commentForm.valid) {
      return;
    }
    const model = this.mapModel(formData);
    this.save(model);
  }

  save(comment: Comment) {
    this.blogService
      .addComment(comment)
      .pipe()
      .subscribe((res) => {
        if (res) {
          this.commentForm.reset();
          this.blogService.getPostDetails(this.postId);
        }
      });
  }

  mapModel(data: any) {
    const user = this.stateService.getLoggedInUser();
    const comment = new Comment();
    comment.id = this.getRandomId();
    comment.userId = user.id;
    comment.postId = this.postId;
    comment.body = data.comment;
    return comment;
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000 - 1) + 1);
  }
}

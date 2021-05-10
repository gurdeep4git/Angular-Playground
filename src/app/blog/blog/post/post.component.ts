import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { pipe } from 'rxjs';
import { take } from 'rxjs/operators';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { ConfirmationModalConfiguration } from '../../../shared/models/confirmationModal.model';
import { Post } from '../../../shared/models/post.model';
import { BlogService } from '../../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() posts: Post[];
  @Input() isSidePost: boolean = false;

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {}

  onDelete(post: Post) {
    const initialState: ConfirmationModalConfiguration = {
      title: `Delete ${post.title}`,
      primaryButtonTitle: 'Yes',
      secondaryButtonTitle: 'No',
      callback: this.deletePost.bind(this, post.id),
    };

    this.modalRef = this.modalService.show(ConfirmationModalComponent, {
      initialState,
    });
  }

  deletePost(postId: number) {
    this.blogService
      .deletePost(postId)
      .pipe(take(1))
      .subscribe((res) => {
        this.blogService.getPosts(
          this.blogService.page,
          this.blogService.limit
        );
        this.modalRef.hide();
      });
  }
}

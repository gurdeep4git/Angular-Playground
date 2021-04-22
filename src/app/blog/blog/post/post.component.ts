import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() posts: Post[];
  @Input() isSidePost: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}

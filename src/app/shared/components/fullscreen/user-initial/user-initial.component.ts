import { Component, Input, OnInit } from '@angular/core';
import { SignUp } from '../../../models/auth/auth.model';

@Component({
  selector: 'app-user-initial',
  templateUrl: './user-initial.component.html',
  styleUrls: ['./user-initial.component.scss'],
})
export class UserInitialComponent implements OnInit {
  @Input() user: SignUp;
  @Input() isNavbarParent: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}

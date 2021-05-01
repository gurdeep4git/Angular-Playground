import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss'],
})
export class FriendsComponent implements OnInit {
  showFullScreen: boolean;

  friendsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.friendsForm = this.fb.group({
      myName: ['', Validators.required],
      friends: new FormArray([]),
    });
  }

  openFullScreen() {
    this.showFullScreen = true;
  }

  get friendsFormControls() {
    return this.friendsForm.controls;
  }
  get friends() {
    return this.friendsFormControls.friends as FormArray;
  }

  addFriend() {
    this.friends.push(
      this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      })
    );
  }

  onSubmit(data: unknown) {
    console.log(data);
  }
}

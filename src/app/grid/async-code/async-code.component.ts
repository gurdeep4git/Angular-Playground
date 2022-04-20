import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-code',
  templateUrl: './async-code.component.html',
  styleUrls: ['./async-code.component.scss']
})
export class AsyncCodeComponent implements OnInit {

  comments: any = [];

  constructor() { }

  ngOnInit(): void {
    //this.fetchDataByPromise();
    this.fetchDataByAsyncAwait();
  }

  async fetchDataByAsyncAwait() {
    try {
      const users = await this.getUsers();
      const posts = await this.getPosts(users[0].id);
      const comments = await this.getComments(posts[0].id);
      this.comments = comments;
    }
    catch (err) {
      console.log(err);
    }
  }

  private fetchDataByPromise() {
    this.getUsers()
      .then((users) => this.getPosts(users[0].id))
      .then((posts) => this.getComments(posts[0].id))
      .then((comments) => console.log('from promises', comments))
      .catch((err) => console.log(err));
  }

  getUsers() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => resolve(users));
    });
  }

  getPosts(id: number) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => resolve(posts));
    });
  }

  getComments(id: number) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(comments => resolve(comments));
    });
  }





}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignUp } from './../models/auth/auth.model';
import { ApiService } from './api.service';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private stateService: StateService,
    private apiService: ApiService
  ) {}

  loggedInUser: SignUp;
  private userSource$ = new BehaviorSubject<SignUp>(null);
  user$ = this.userSource$.asObservable();

  updateUser(user: SignUp) {
    this.userSource$.next(user);
  }

  getUsers(): Observable<unknown> {
    return this.apiService.get(`/users`);
  }

  saveUser(user: SignUp): Observable<unknown> {
    return this.apiService.post(`/users`, user);
  }

  setUser(user: SignUp) {
    this.stateService.setLoggedInUser(user);
    this.updateUser(user);
  }

  getUser() {
    this.loggedInUser = this.stateService.getLoggedInUser();
    this.updateUser(this.loggedInUser);
  }
}

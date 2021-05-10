import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, delay, take } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { ValidationService } from '../../services/validation.service';
import {
  LoginData,
  SignUp,
  SignUpFormData,
} from './../../models/auth/auth.model';
import { getRandomIds } from './../../utilities/helpers';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  signUpForm: FormGroup;
  loginForm: FormGroup;

  validUser: boolean;
  loginSubmit: boolean;
  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initSignUpForm();
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.fb.group({
      loginEmail: ['', [this.validationService.required]],
      loginPassword: ['', [this.validationService.required]],
    });
  }

  initSignUpForm() {
    this.signUpForm = this.fb.group(
      {
        name: ['', [this.validationService.required]],
        email: [
          '',
          [this.validationService.required, this.validationService.email],
        ],
        password: [
          '',
          [this.validationService.required, this.validationService.password],
        ],
        confirmPassword: ['', [this.validationService.required]],
      }
      // {
      //   validators: [
      //     this.validationService.shouldSame('password', 'confirmPassword'),
      //   ],
      // }
    );
  }

  onSignUpSubmit(data: SignUpFormData): void {
    if (!this.signUpForm.valid) {
      return;
    }
    const signup = this.mapSignUpModel(data);
    this.signUp(signup);
  }

  mapSignUpModel(data: SignUpFormData): SignUp {
    const signup = new SignUp();

    signup.id = getRandomIds();
    signup.name = data.name;
    signup.email = data.email;
    signup.password = data.password;
    signup.imageUrl = '';

    return signup;
  }

  signUp(signup: SignUp) {
    this.userService
      .saveUser(signup)
      .pipe(
        catchError(() => {
          return EMPTY;
        }),
        take(1),
        delay(2000)
      )
      .subscribe((response: SignUp) => {
        this.userService.setUser(response);
        this.signUpForm.reset();
        this.router.navigate(['/post'], { relativeTo: this.route });
      });
  }

  onLogin(data: LoginData) {
    this.userService
      .getUsers()
      .pipe(
        catchError((_) => EMPTY),
        take(1)
      )
      .subscribe((users: SignUp[]) => {
        if (!users) {
          return;
        }
        this.loginSubmit = true;
        this.isValidUser(users, data);
      });
  }

  isValidUser(users: SignUp[], data: LoginData) {
    const user = users.filter(
      (x) => x.email === data.loginEmail && x.password === data.loginPassword
    );
    if (user.length > 0) {
      this.validUser = true;
      this.userService.setUser(user[0]);
      this.loginForm.reset();
      this.router.navigate(['/post'], { relativeTo: this.route });
    }
  }

  onSelectTab() {
    this.initSignUpForm();
    this.initLoginForm();
    this.validUser = false;
    this.loginSubmit = false;
  }
}

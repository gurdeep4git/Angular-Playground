import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUp } from '../../models/auth/auth.model';
import { StateService } from '../../services/state.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  loggedInUser: SignUp;

  constructor(
    private stateService: StateService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.userService.getUser();
  }

  ngOnInit(): void {
    this.userService.user$.subscribe((res) => {
      this.loggedInUser = res;
    });
  }

  logout() {
    this.userService.updateUser(null);
    this.stateService.clearAll();
    this.router.navigate(['/login'], { relativeTo: this.route });
  }
}

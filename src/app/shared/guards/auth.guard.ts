import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { StateService } from '../services/state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private stateService: StateService) {}

  canActivate() {
    // const user = this.stateService.getLoggedInUser();
    // if (user) {
    //   return true;
    // } else {
    //   return false;
    // }
    return true;
  }
}

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'app/core/shared/authentication.service';

@Injectable()
export class LoginAccessGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) {

  }

  canActivate() {
    return !this.authenticationService.isConnected();
  }

}

import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from 'app/core/shared/authentication.service';

@Injectable()
export class AccessCheckerGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  canActivate() {
    if (this.authenticationService.isConnected()) {
      return true;
    }
    this.router.navigate(['/login']);
  }

}

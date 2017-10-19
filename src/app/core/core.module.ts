import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from 'app/core/navbar/navbar.component';
import { AuthenticationService } from 'app/core/shared/authentication.service';
import { AccessCheckerGuard } from 'app/core/shared/access-checker.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  providers: [
    AuthenticationService,
    AccessCheckerGuard
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { ProfileComponent } from 'app/account/profile/profile.component';
import { LoginComponent } from 'app/account/login/login.component';
import { LoginAccessGuard } from 'app/account/shared/login-access.guard';

const routes: Route[] = [
  { path: 'account', component: ProfileComponent },
  { path: 'login', component: LoginComponent, canActivate: [LoginAccessGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule {

}

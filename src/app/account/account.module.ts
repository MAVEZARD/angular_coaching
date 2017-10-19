import { NgModule } from '@angular/core';

import { AccountRoutingModule } from 'app/account/account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginAccessGuard } from 'app/account/shared/login-access.guard';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [ProfileComponent, LoginComponent],
  providers: [LoginAccessGuard]
})
export class AccountModule { }

import { NgModule } from '@angular/core';

import { AccountRoutingModule } from 'app/account/account-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AccountRoutingModule
  ],
  declarations: [ProfileComponent]
})
export class AccountModule { }

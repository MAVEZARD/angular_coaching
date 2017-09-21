import { NgModule } from '@angular/core';

import { AdminRoutingModule } from 'app/admin/admin-routing.module';
import { ConfigurationComponent } from './configuration/configuration.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [ConfigurationComponent]
})
export class AdminModule { }

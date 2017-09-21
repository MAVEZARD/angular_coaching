import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConfigurationComponent } from 'app/admin/configuration/configuration.component';

const routes = [
  { path: 'admin', component: ConfigurationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}

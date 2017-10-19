import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealersListComponent } from 'app/dealers/dealers-list/dealers-list.component';
import { AccessCheckerGuard } from 'app/core/shared/access-checker.guard';

const routes = [
  { path: 'dealers', component: DealersListComponent, canActivate: [AccessCheckerGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DealersRoutingModule {

}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DealersListComponent } from 'app/dealers/dealers-list/dealers-list.component';

const routes = [
  { path: 'dealers', component: DealersListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DealersRoutingModule {

}

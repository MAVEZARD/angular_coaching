import { NgModule } from '@angular/core';

import { DealersRoutingModule } from 'app/dealers/dealers-routing.module';
import { DealersListComponent } from './dealers-list/dealers-list.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DealersRoutingModule
  ],
  declarations: [DealersListComponent]
})
export class DealersModule { }

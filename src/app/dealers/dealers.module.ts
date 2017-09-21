import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealersRoutingModule } from 'app/dealers/dealers-routing.module';
import { DealersListComponent } from './dealers-list/dealers-list.component';

@NgModule({
  imports: [
    CommonModule,
    DealersRoutingModule
  ],
  declarations: [DealersListComponent]
})
export class DealersModule { }

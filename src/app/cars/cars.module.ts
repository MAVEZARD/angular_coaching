import { NgModule } from '@angular/core';

import { CarsDisplayComponent } from './cars-display/cars-display.component';
import { CarsRoutingModule } from 'app/cars/cars-routing.module';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    CarsRoutingModule
  ],
  declarations: [CarsDisplayComponent],
  exports: [CarsDisplayComponent]
})
export class CarsModule { }

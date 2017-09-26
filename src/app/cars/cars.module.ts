import { NgModule } from '@angular/core';

import { CarsDisplayComponent } from './cars-display/cars-display.component';
import { CarsRoutingModule } from 'app/cars/cars-routing.module';
import { SharedModule } from 'app/shared/shared.module';
import { CarsService } from 'app/cars/shared/cars.service';
import { DetailsComponent } from './details/details.component';
import { CarPipe } from './shared/car.pipe';


@NgModule({
  imports: [
    SharedModule,
    CarsRoutingModule
  ],
  declarations: [CarsDisplayComponent, DetailsComponent, CarPipe],
  exports: [CarsDisplayComponent],
  providers: [CarsService]
})
export class CarsModule { }

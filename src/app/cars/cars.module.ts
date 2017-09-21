import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsDisplayComponent } from './cars-display/cars-display.component';
import { CarsRoutingModule } from 'app/cars/cars-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  declarations: [CarsDisplayComponent],
  exports: [CarsDisplayComponent]
})
export class CarsModule { }

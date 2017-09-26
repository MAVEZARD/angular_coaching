import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'app/cars/shared/car';

@Pipe({
  name: 'car'
})
export class CarPipe implements PipeTransform {

  transform(value: Car): string {
    return `${value.marque} ${value.modele}`;
  }

}

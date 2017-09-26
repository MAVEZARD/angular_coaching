import { Injectable } from '@angular/core';
import { Car } from 'app/cars/shared/car';

@Injectable()
export class CarsService {

  autos: Car[] = [
    new Car(1, 'Audi', 'A1'),
    new Car(2, 'BMW', 'Serie 1'),
    new Car(3, 'Citroen', 'C1')
  ];

  constructor() { }

  getCarsList() {
    return this.autos;
  }

  getCar(id: number) {
    return this.autos.find(a => a.id === id);
  }

}

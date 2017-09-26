import { Component, OnInit } from '@angular/core';
import { Car } from 'app/cars/shared/car';
import { CarsService } from 'app/cars/shared/cars.service';

@Component({
  selector: 'app-cars-display',
  templateUrl: './cars-display.component.html',
  styleUrls: ['./cars-display.component.css']
})
export class CarsDisplayComponent implements OnInit {

  message = 'cars 2';

  autos: Car[];

  constructor(private carsService: CarsService) {
  }

  ngOnInit() {
    this.autos = this.carsService.getCarsList();
  }

}

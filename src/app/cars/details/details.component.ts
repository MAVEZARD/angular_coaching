import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap } from '@angular/router';

import { CarsService } from 'app/cars/shared/cars.service';
import { Car } from 'app/cars/shared/car';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  car: Car | undefined;

  constructor(private route: ActivatedRoute,
    private carsService: CarsService) { }

  ngOnInit() {
    this.route
      .paramMap
      .map(params => this.carsService.getCar(+params.get('id')))
      .subscribe(c => this.car = c);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-display',
  templateUrl: './cars-display.component.html',
  styleUrls: ['./cars-display.component.css']
})
export class CarsDisplayComponent implements OnInit {

  message = 'cars 2';

  constructor() { }

  ngOnInit() {
  }

}

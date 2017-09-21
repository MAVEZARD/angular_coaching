import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarsDisplayComponent } from 'app/cars/cars-display/cars-display.component';

const routes = [
  { path: 'cars', component: CarsDisplayComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarsRoutingModule {

}

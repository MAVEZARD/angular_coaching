import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarsDisplayComponent } from 'app/cars/cars-display/cars-display.component';
import { DetailsComponent } from 'app/cars/details/details.component';

const routes = [
  {
    path: 'cars',
    component: CarsDisplayComponent,
    children: [
      { path: ':id', component: DetailsComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarsRoutingModule {

}

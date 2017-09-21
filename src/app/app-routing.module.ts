import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarsDisplayComponent } from 'app/cars/cars-display/cars-display.component';

const routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

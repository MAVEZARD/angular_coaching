import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountModule } from 'app/account/account.module';
import { AdminModule } from 'app/admin/admin.module';
import { CarsModule } from 'app/cars/cars.module';
import { DealersModule } from 'app/dealers/dealers.module';
import { CoreModule } from 'app/core/core.module';
import { CarsDisplayComponent } from 'app/cars/cars-display/cars-display.component';
import { AppRoutingModule } from 'app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AccountModule,
    AdminModule,
    CarsModule,
    DealersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsContainerComponent } from './cars-container/cars-container.component';


@NgModule({
  declarations: [CarsContainerComponent],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})

export class CarsModule {}

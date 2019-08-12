import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsContainerComponent } from './cars-container/cars-container.component';

const routes: Routes = [
  {
    path: "cars",
    component: CarsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }

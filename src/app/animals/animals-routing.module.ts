import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsContainerComponent } from './animals-container/animals-container.component';


const routes: Routes = [
  {
    path: "animals",
    component: AnimalsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule { }

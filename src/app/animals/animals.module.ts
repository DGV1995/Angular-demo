import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsContainerComponent } from './animals-container/animals-container.component';


@NgModule({
  declarations: [AnimalsContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    AnimalsRoutingModule
  ]
})

export class AnimalsModule { }

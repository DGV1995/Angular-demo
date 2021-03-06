import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { HttpClientModule } from '@angular/common/http';
import { AnimalsModule } from './animals/animals.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    HttpClientModule,
    AnimalsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

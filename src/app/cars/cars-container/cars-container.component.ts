import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../shared/car.model';
import { CarService } from '../shared/car.service'

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.css']
})
export class CarsContainerComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.search("");
  }

  search(term: string) {
    this.carService.listByName(term).subscribe(data => this.cars = data);
  }

}

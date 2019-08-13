import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/animal.model';
import { AnimalsService } from '../shared/animals.service'

@Component({
  selector: 'app-animals-container',
  templateUrl: './animals-container.component.html',
  styleUrls: ['./animals-container.component.css']
})

export class AnimalsContainerComponent implements OnInit {

  animals: Animal[];

  alimentation: string;
  family: string

  constructor(private animalsService: AnimalsService) {}

  ngOnInit() {
    this.search();
  }

  search() {
    //this.animalsService.listByName(term).subscribe(data => this.animals = data);
    this.animalsService.listByAlimentationAndFamily(this.alimentation, this.family).subscribe(data => this.animals = data);
  }

}

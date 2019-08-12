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

  constructor(private animalsService: AnimalsService) {}

  ngOnInit() {
    this.animalsService.list().subscribe(
      data => this.animals = data
    );
  }

}

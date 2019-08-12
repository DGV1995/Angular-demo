import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Animal } from './animal.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  animalsURL = environment.animalsDataURL + "/animals"

  constructor(private http: HttpClient) { }

  list(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsURL);
  }

}

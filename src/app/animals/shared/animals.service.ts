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

  /*listByName(name: string): Observable<Animal[]> {
    if (!name.trim()) {
      return this.list();
    }

    const url = `${this.animalsURL}?name_like=${name}`;
    
    return this.http.get<Animal[]>(url);
  }*/

  listByAlimentationAndFamily(alimentation: string, family: string): Observable<Animal[]> {
    let url: string;

    if (alimentation == null  && family != null) {
      url = `${this.animalsURL}?family=${family}`;
    } else if (alimentation != null && family == null) {
      url =  `${this.animalsURL}?food=${alimentation}`;
    } else if (alimentation == null && family == null) {
      return this.list();
    } else {
      url = `${this.animalsURL}?food=${alimentation}&family=${family}`;
    }

    return this.http.get<Animal[]>(url);
  }

}

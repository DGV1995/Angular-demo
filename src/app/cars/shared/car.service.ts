import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  dataUrl: string = environment.carsDataURL + "/cars";

  constructor(private http: HttpClient) { }

  list(): Observable<Car[]> {
    return this.http.get<Car[]>(this.dataUrl);
  }

  /*listByName(brand: string): Observable<Car[]> {
    if (!brand.trim()) {
      return this.list();
    }

    const url = `${this.dataUrl}?brand_like=${brand}`;

    return this.http.get<Car[]>(url);
  }*/

  listByBrand(brand: string): Observable<Car[]> {
    if (brand == "") {
      return this.list();
    } 

    const url = `${this.dataUrl}?brand=${brand}`;

    return this.http.get<Car[]>(url);
  }
}

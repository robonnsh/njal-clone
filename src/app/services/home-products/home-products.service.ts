import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../interfaces/product';
import { Iproduct } from '../../interfaces/Iproduct.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeProductsService {
  // baseApiUrl: string = 'http://localhost:5016';
  // constructor(private http: HttpClient) {}

  // getAllProduct(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.baseApiUrl + '/api/Product');
  // }
  constructor(private http: HttpClient) {}

  getAllProperties(): Observable<Iproduct[]> {
    return this.http.get<any[]>('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Iproduct[] = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }
}

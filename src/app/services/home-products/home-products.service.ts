import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class HomeProductsService {
  baseApiUrl: string = 'https://localhost:7051';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + '/api/products');
  }
}

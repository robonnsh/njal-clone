import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class HomeProductsService {
  baseApiUrl: string = 'http://localhost:5016';
  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseApiUrl + '/api/Product');
  }
}

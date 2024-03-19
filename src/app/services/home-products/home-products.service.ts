import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../interfaces/product';
import { environment } from '../../environments/environment';
import { IkeyvaluePairs } from '../../interfaces/IkeyValuePairs';
import { INewInProduct } from '../../interfaces/INewIn.interface';
@Injectable({
  providedIn: 'root',
})
export class HomeProductsService {
  baseApiUrl = environment.baseApiUrl;
  // constructor(private http: HttpClient) {}

  // getAllProduct(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.baseApiUrl + '/api/Product');
  // }
  constructor(private http: HttpClient) {}

  // getProductTypes(): Observable<IkeyvaluePairs[]> {
  //   return this.http.get<IkeyvaluePairs[]>(
  //     this.baseApiUrl + '/ProductType/list'
  //   );
  // }

  getLastAddedFourProduct(): Observable<INewInProduct[]> {
    return this.http.get<INewInProduct[]>(
      this.baseApiUrl + '/api/NewIn/get/NewlyAddedProduct'
    );
  }

  // getNewInProducts(productId: number): Observable<INewInProduct[]> {
  //   return this.http.get<INewInProduct[]>(
  //     `${this.baseApiUrl}/api/NewIn/get/newInProductById/${productId}`
  //   );
  // }
  getNewInProducts(id: string): Observable<INewInProduct> {
    return this.http.get<INewInProduct>(
      `${this.baseApiUrl}/api/NewIn/get/newInProductById/${id}`
    );
  }

  // getAllProperties(): Observable<Iproduct[]> {
  //   return this.http.get<any[]>(this.baseApiUrl + '/api/ProductType/list').pipe(
  //     map((data) => {
  //       const propertiesArray: Iproduct[] = [];
  //       for (const id in data) {
  //         if (data.hasOwnProperty(id)) {
  //           propertiesArray.push(data[id]);
  //         }
  //       }
  //       return propertiesArray;
  //     })
  //   );
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../../interfaces/product';
import { environment } from '../../environments/environment';
import { IkeyvaluePairs } from '../../interfaces/IkeyValuePairs';
import { INewInProduct } from '../../interfaces/INewIn.interface';
import { IProductBase } from '../../interfaces/iproduct-base';
@Injectable({
  providedIn: 'root',
})
export class HomeProductsService {
  baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  // Last Added 4 product for New In
  getLastAddedFourProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(
      this.baseApiUrl + '/api/Product/get/NewlyAddedProduct'
    );
  }

  // New In Product based on their id for product-detail page
  // getProductsById(name: string, id: string): Observable<INewInProduct[]> {
  //   return this.http.get<INewInProduct[]>(
  //     `${this.baseApiUrl}/api/Product/detail/${id}?name=${name}`
  //   );
  // }

  getProduct(id?: number) {
    return this.http.get<Product>(
      `${this.baseApiUrl}/api/Product/detail/${id}`
    );
  }

  // get products by gender

  getProductByGender(id: any) {
    return this.http.get<Product>(
      `${this.baseApiUrl}/api/Product/list/gender/${id}`
    );
  }

  // key-value pairs for product type (Admin-panel)

  getProductTypes(): Observable<IkeyvaluePairs[]> {
    return this.http.get<IkeyvaluePairs[]>(
      `${this.baseApiUrl}/api/ProductType/list`
    );
  }

  // key-value pairs for sub-category type (Admin-panel)

  getSubCategoryTypes(): Observable<IkeyvaluePairs[]> {
    return this.http.get<IkeyvaluePairs[]>(
      `${this.baseApiUrl}/api/SubCategoryType/list`
    );
  }
}

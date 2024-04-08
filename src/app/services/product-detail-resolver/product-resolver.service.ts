import { Injectable } from '@angular/core';
import { HomeProductsService } from '../home-products/home-products.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Product } from '../../interfaces/product';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<Product> {
  constructor(
    private productService: HomeProductsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> | Product {
    const prodId = route.params['id'];
    return this.productService.getProduct(+prodId).pipe(
      map((product) => {
        if (!product) {
          throw new Error('product not found');
        }
        return product;
      }),
      catchError((error) => {
        this.router.navigate(['/']);
        return throwError(error);
      })
    );
  }
}

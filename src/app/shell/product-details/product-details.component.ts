import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewInProduct } from '../../interfaces/INewIn.interface';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | Product;
  constructor(
    private route: ActivatedRoute,
    private homeProductService: HomeProductsService
  ) {}
  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.homeProductService
        .getProduct(+productId)
        .subscribe((res: Product) => {
          console.warn(res);
          this.productData = res;
        });
  }
}

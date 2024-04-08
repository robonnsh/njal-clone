import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewInProduct } from '../../interfaces/INewIn.interface';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { Product } from '../../interfaces/product';
import { productResolverData } from '../../interfaces/productResolverData';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  product = new Product();
  productData!: Product;
  productId!: number;
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

  // this.productId = +this.route.snapshot.params['id'];
  // this.route.data.subscribe((data) => {
  //   const resolvedData = data as productResolverData;
  //   this.product = data['product'];
  //   console.log(this.product);
  // });
}

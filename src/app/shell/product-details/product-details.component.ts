import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INewInProduct } from '../../interfaces/INewIn.interface';
import { HomeProductsService } from '../../services/home-products/home-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  NewInProduct!: INewInProduct;
  constructor(
    private route: ActivatedRoute,
    private homeProductService: HomeProductsService
  ) {}
  ngOnInit(): void {
    let NewInProductId = this.route.snapshot.paramMap.get('NewInProductId');
    NewInProductId &&
      this.homeProductService
        .getNewInProducts(NewInProductId)
        .subscribe((res) => {
          this.NewInProduct = res;
        });
  }
}

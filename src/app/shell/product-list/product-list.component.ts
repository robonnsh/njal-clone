import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { IProductBase } from '../../interfaces/iproduct-base';
import { StaticDataService } from '../../services/staticDataService/static-data.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  titles: any;
  // gender!: number;
  products: any;
  // Product: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private homeProductService: HomeProductsService,
    private staticData: StaticDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const genderId = +params['id'];
      this.homeProductService.getProductByGender(genderId).subscribe((res) => {
        this.products = res;
        console.log(res);
        console.log(this.route.snapshot.url.toString());
      });
    });

    // static data

    this.staticData.getWomenTitlesEnd().subscribe((res) => {
      this.titles = res;
    });
  }
}

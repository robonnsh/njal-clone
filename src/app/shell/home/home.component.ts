import { Component, OnInit } from '@angular/core';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { IProductBase } from '../../interfaces/iproduct-base';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products!: Product[];
  constructor(private homeProductService: HomeProductsService) {}
  ngOnInit(): void {
    this.loadLastAddedProduct();
  }

  loadLastAddedProduct(): void {
    this.homeProductService.getLastAddedFourProduct().subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }
}

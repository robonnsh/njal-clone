import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private router: Router,
    private homeProductService: HomeProductsService
  ) {}

  ngOnInit(): void {
    this.homeProductService.getAllProduct().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { Product } from '../../interfaces/product';
import { INewInProduct } from '../../interfaces/INewIn.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  NewInproducts: INewInProduct[] = [];
  // NewInproducts: Array<Iproduct> = [];
  constructor(
    private router: Router,
    private homeProductService: HomeProductsService
  ) {}
  ngOnInit(): void {
    this.homeProductService.getLastAddedFourProduct().subscribe((data) => {
      this.NewInproducts = data;
    });
  }
  // ngOnInit(): void {
  //   this.homeProductService.getNewInProducts().subscribe({
  //     next: (products) => {
  //       this.NewInproducts = products;
  //     },
  //     error: (response) => {
  //       console.log(response);
  //     },
  //   });
  // }
}

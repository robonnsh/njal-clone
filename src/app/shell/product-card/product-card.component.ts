import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { Product } from '../../interfaces/product';
import { INewInProduct } from '../../interfaces/INewIn.interface';
import { IProductBase } from '../../interfaces/iproduct-base';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() product!: IProductBase;
  constructor() {}
  ngOnInit(): void {}
}

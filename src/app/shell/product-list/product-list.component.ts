import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { HomeProductsService } from '../../services/home-products/home-products.service';
import { IProductBase } from '../../interfaces/iproduct-base';
import { StaticDataService } from '../../services/staticDataService/static-data.service';
import { Iproduct } from '../../interfaces/iproduct';
import { ItextCollection } from '../../interfaces/itext-collection';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  textCollection!: ItextCollection[];
  titles: any[] = [];
  // gender!: number;
  products!: IProductBase[];
  Name: string = '';
  searchDesigner: string = '';
  sortByParam: string = 'price';
  sortDirection = 'asc';
  // Product: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private homeProductService: HomeProductsService,
    private staticData: StaticDataService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params) => {
    //   const genderId = +params['id'];
    //   this.homeProductService.getAllProducts(genderId).subscribe({
    //     next: (res) => {
    //       this.products = res;
    //     },
    //     error: (error) => {
    //       console.log(error);
    //     },
    //   });
    // });
    this.getProductByGender();
    // static data
    this.getTextCollection();
    // this.getTitles();
  }

  getProductByGender() {
    this.route.params.subscribe((params) => {
      const genderId = +params['id'];
      this.homeProductService
        .getProductByGender(genderId)
        .subscribe((res: Product[]) => {
          if (typeof res === 'object' && res !== null) {
            Object.keys(res).forEach((key: any) => {
              console.log(`product: ${key}, Type: ${typeof res[key]}`);
            });
          }
          console.log(res[0]);

          this.products = res;
          console.log(res);
          console.log(this.route.snapshot.url.toString());
          console.log(typeof res);
        });
    });
  }

  onDesignerFilter() {
    if (this.Name.trim()) {
      this.searchDesigner = this.capitalizeFirstLetter(this.Name.trim());
    } else {
      this.searchDesigner = '';
    }
  }

  onSortDirection() {
    if (this.sortDirection === 'desc') {
      this.sortDirection = 'asc';
    } else {
      this.sortDirection = 'desc';
    }
    console.log('clicked', this.sortDirection);
  }
  private capitalizeFirstLetter(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }

  // Titles
  // getTitles() {
  //   this.route.params.subscribe((params) => {
  //     const genderId = +params['id'];
  //     this.staticData.getTextCollection(genderId).subscribe((res) => {
  //       this.titles = res;
  //     });
  //   });
  // }
  // End paragraphs
  // getTextCollection() {
  //   this.route.params.subscribe((params) => {
  //     const genderId = +params['id'];
  //     this.staticData.getTextCollection(genderId).subscribe((res) => {
  //       console.log(res);
  //     });
  //   });
  // }

  getTextCollection() {
    this.route.params.subscribe((params) => {
      const genderId = +params['id'];
      this.staticData.getTextCollection(genderId).subscribe((res) => {
        console.log(res);
        this.textCollection = res;
      });
    });
  }
}

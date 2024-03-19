import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
const routes: Routes = [
  {
    path: 'product-details/:NewInProductId',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  declarations: [ProductCardComponent, ProductDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardComponent } from './product-card.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SlugifyPipe } from '../../Pipes/slugify.pipe';
const routes: Routes = [
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  declarations: [ProductCardComponent, ProductDetailsComponent, SlugifyPipe],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ProductCardComponent],
})
export class ProductCardModule {}

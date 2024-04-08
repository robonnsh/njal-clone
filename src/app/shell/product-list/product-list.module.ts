import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductCardModule } from '../product-card/product-card.module';
import { SortPipe } from '../../Pipes/sort.pipe';
import { FilterPipe } from '../../Pipes/filter.pipe';

@NgModule({
  declarations: [ProductListComponent, SortPipe, FilterPipe],
  imports: [CommonModule, FormsModule, ProductCardModule],
  exports: [ProductListComponent],
})
export class ProductListModule {}

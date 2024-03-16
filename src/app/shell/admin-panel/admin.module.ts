import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './admin-panel.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { ProductPreviewComponent } from './product-preview/product-preview.component';

const routes: Routes = [
  { path: 'product-preview', component: ProductPreviewComponent },
];

@NgModule({
  declarations: [AdminPanelComponent, ProductPreviewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatFormField,
    MatSelectModule,
  ],
  exports: [AdminPanelComponent],
})
export class AdminModule {}

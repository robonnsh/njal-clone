import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin-panel/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './shell.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardModule } from './product-card/product-card.module';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'collection/shop/gender/:id',
    component: ProductListComponent,
  },
];
@NgModule({
  declarations: [
    ShellComponent,
    MainComponent,
    HomeComponent,
    FooterComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    LoginModule,
    HeaderModule,
    AdminModule,
    ProductCardModule,
    RouterModule.forChild(routes),
  ],
  exports: [ShellComponent],
})
export class ShellModule {}

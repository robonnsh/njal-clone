import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { MainComponent } from './shell/main/main.component';
import { HomeComponent } from './shell/home/home.component';
import { LoginComponent } from './shell/login/login.component';
import { HeaderComponent } from './shell/header/header.component';
import { ProductDetailsComponent } from './shell/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'home', component: HomeComponent },
      { path: 'header', component: HeaderComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product-details', component: ProductDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

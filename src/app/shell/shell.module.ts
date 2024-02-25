import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ShellComponent, MainComponent, HomeComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, LoginModule],
  exports: [ShellComponent],
})
export class ShellModule {}

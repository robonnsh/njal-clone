import { Component } from '@angular/core';
import { NavbarToggleService } from '../../../services/navbar-toggle/navbar-toggle.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent {
  constructor(private navbarToggleService: NavbarToggleService) {}
  showLists(): boolean {
    return this.navbarToggleService.showLists;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarToggleService } from '../../services/navba-toggle/navbar-toggle.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() logoClicked = new EventEmitter<void>();
  // faChevronDown = faChevronDown;
  selectedGender: string = '';
  isDropdownOpen: boolean = false;
  isVisible: boolean = true;

  constructor(
    private navbarToggleService: NavbarToggleService,
    private location: Location
  ) {}

  // header list items hidden
  showLists(): boolean {
    return this.navbarToggleService.showLists;
  }

  // header logo refresh's the current page
  refreshPage(event: Event) {
    event.preventDefault();
    this.location.replaceState(this.location.path());
    window.location.reload();
  }

  // dropdown
  toggleDropdown(gender: string, isOpen: boolean): void {
    this.selectedGender = gender;
    this.isDropdownOpen = isOpen;
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

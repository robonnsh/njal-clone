import { Component, EventEmitter, Output } from '@angular/core';
import { Location } from '@angular/common';
import { NavbarToggleService } from '../../services/navbar-toggle/navbar-toggle.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() logoClicked = new EventEmitter<void>();
  selectedGender: string = '';
  isDropdownOpen: boolean = false;

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
  // toggleDropdown(gender: string, isOpen: boolean): void {
  //   this.selectedGender = gender;
  //   this.isDropdownOpen = isOpen;
  // }
  toggleDropdown(gender: string, isOpen: boolean): void {
    this.selectedGender = gender;
    this.isDropdownOpen = isOpen;
  }

  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

import { Component, Input } from '@angular/core';
import { DropdownImg } from '../../../interfaces/dropdown-img';
import { DropdownList } from '../../../interfaces/dropdown-list';
import { HeaderDropdown } from '../../../services/header-dropdown/header-dropdown.service';
@Component({
  selector: 'app-header-dropdown',
  templateUrl: './header-dropdown.component.html',
  styleUrl: './header-dropdown.component.scss',
})
export class HeaderDropdownComponent {
  @Input() gender!: string;
  images: DropdownImg[] = [];
  labels: DropdownList[] = [];
  constructor(private headerDropdown: HeaderDropdown) {}
  ngOnInit(): void {
    this.loadDropdownData();
  }
  loadDropdownData(): void {
    this.images = this.headerDropdown.getLabelImages(this.gender);
    this.labels = this.headerDropdown.getLabelComponents(this.gender);
  }
}

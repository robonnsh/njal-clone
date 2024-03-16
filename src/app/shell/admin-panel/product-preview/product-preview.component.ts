import { Component, Input } from '@angular/core';
import { Iproduct } from '../../../interfaces/Iproduct.interface';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.scss',
})
export class ProductPreviewComponent {
  @Input() product: Iproduct = {
    Id: 0,
    DesignerName: '',
    ProductName: '',
    Price: 0,
    Country: '',
    Size: '',
    Colour: '',
    Description: '',
  };
}

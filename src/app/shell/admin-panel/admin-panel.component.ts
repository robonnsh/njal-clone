import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { IkeyvaluePairs } from '../../interfaces/IkeyValuePairs';
import { HomeProductsService } from '../../services/home-products/home-products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent implements OnInit {
  @ViewChild('formsTab') formsTab!: MatTabGroup;
  TabIndex = 0;
  form!: FormGroup;
  isSubmiting = false;
  errorMessage: string = '';
  siteKey: string;
  // propertyView: Iproduct = {
  //   id: 0,
  //   gender: 0,
  //   name: '',
  //   productType: '',
  //   subCategoryType: '',
  // };
  productTypes!: IkeyvaluePairs[];
  subCategoryTypes!: IkeyvaluePairs[];

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private productService: HomeProductsService
  ) {
    this.siteKey = '6LcTm20pAAAAAAMfcVcGsOAfuMxaZcfjfvQWmyCT';
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gender: ['', [Validators.required]],
      productType: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      subCategoryType: ['', [Validators.required]],
    });
    this.productService.getProductTypes().subscribe((data) => {
      this.productTypes = data;
    });
    this.productService.getSubCategoryTypes().subscribe((data) => {
      this.subCategoryTypes = data;
    });
  }
  onSubmit() {
    console.log('submitted');
    console.log(this.form.value);
    this.isSubmiting = true;
    if (this.form.invalid) {
      return;
    }
    //next tab
    // nextTab() {
    //   const tabCount = 3;
    //   this.TabIndex = (this.TabIndex + 1) % tabCount;
    // }
    // backTab() {
    //   const tabCount = 3;
    //   this.TabIndex = (this.TabIndex - 1 + tabCount) % tabCount;
    // }
  }
}

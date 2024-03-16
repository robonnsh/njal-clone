import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { Iproduct } from '../../interfaces/Iproduct.interface';

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
  propertyView: Iproduct = {
    Id: 0,
    DesignerName: '',
    ProductName: '',
    Price: 0,
    Country: '',
    Size: '',
    Colour: '',
    Description: '',
  };
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.siteKey = '6LcTm20pAAAAAAMfcVcGsOAfuMxaZcfjfvQWmyCT';
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      gender: ['', [Validators.required]],
      designerName: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      country: ['', [Validators.required]],
      colour: ['', [Validators.required]],
      size: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      photos: ['', [Validators.required]],
    });
  }

  // next tab
  // nextTab() {
  //   const tabCount = 3;
  //   this.TabIndex = (this.TabIndex + 1) % tabCount;
  // }

  // backTab() {
  //   const tabCount = 3;
  //   this.TabIndex = (this.TabIndex - 1 + tabCount) % tabCount;
  // }

  onSubmit() {
    console.log('submitted');
    this.isSubmiting = true;
    if (this.form.invalid) {
      return;
    }
    // const email = this.form.value.email;
    // const password = this.form.value.password;
    // const labelName = this.form.value.labelName;
    // this.authenticationService
    //   .signUp({
    //     email: email,
    //     password: password,
    //     labelName: labelName,
    //   })
    //   .subscribe({
    //     next: () => {
    //       this.form.reset();
    //       this.isRegistering = false;
    //       this.emailAlreadyInUse = false;
    //       this.errorMessage = '';
    //       this.snackBar.open('Registration successful', 'OK', {
    //         duration: 3000,
    //       });
    //     },
    //     error: (error) => {
    //       this.isRegistering = false;
    //       this.snackBar.open(error.message, 'OK', {
    //         duration: 3000,
    //       });
    //     },
    //   });
  }
}

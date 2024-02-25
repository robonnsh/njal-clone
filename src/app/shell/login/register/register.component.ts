import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../interfaces/auth';
import { AuthService } from '../../../services/auth/auth.service';
import { checkbx } from '../../../directives/checkbox.directive';
import { passwordMatchValidator } from '../../../directives/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  // siteKey: string;
  registerForm = this.formBuilder.group(
    {
      labelName: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsCheckbox: ['', checkbx],
    },
    {
      validators: passwordMatchValidator,
    }
  );

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toast: ToastrService
  ) {
    // this.siteKey = '6LcTm20pAAAAAAMfcVcGsOAfuMxaZcfjfvQWmyCT';
  }

  get labelName() {
    return this.registerForm.controls['labelName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  get termsCheckbox() {
    return this.registerForm.controls['termsCheckbox'];
  }

  // submitDetails() {
  //   const postData = { ...this.registerForm.value };
  //   delete postData.confirmPassword;
  //   this.authService.registerUser(postData as User).subscribe(() => {
  //     this.registerForm.reset();
  //     this.toast.success('Register successfully');
  //   });
  // }
}

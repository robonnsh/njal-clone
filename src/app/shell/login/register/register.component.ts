import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';
import { passwordMatchValidator } from '../../../directives/password-match.directive';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  form!: FormGroup;
  isLoggingIn = false;
  isRecoveringPassword = false;
  isRegistering = false;
  emailAlreadyInUse = false;
  errorMessage: string = '';
  siteKey: string;
  passwordsMatch: boolean = false;

  constructor(
    private authenticationService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.siteKey = '6LcTm20pAAAAAAMfcVcGsOAfuMxaZcfjfvQWmyCT';
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        labelName: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        termsCheckbox: [false, Validators.requiredTrue],
      },
      { validators: passwordMatchValidator }
    );
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    const email = this.form.value.email;
    const password = this.form.value.password;
    const labelName = this.form.value.labelName;
    this.authenticationService
      .signUp({
        email: email,
        password: password,
        labelName: labelName,
      })
      .subscribe({
        next: () => {
          this.form.reset();
          this.isRegistering = false;
          this.emailAlreadyInUse = false;
          this.errorMessage = '';
          this.snackBar.open('Registration successful', 'OK', {
            duration: 3000,
          });
        },
        error: (error) => {
          this.isLoggingIn = false;
          this.snackBar.open(error.message, 'OK', {
            duration: 3000,
          });
        },
      });
  }
}

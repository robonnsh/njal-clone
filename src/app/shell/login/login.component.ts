import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;
  isLoggingIn = false;
  isRecoveringPassword = false;
  isRegistering = false;
  errorMessage: string = '';
  hide: boolean = true;
  showLoginComponents: boolean = true;
  isAsideNavOpen: boolean = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login() {
    this.isLoggingIn = true;

    this.authService
      .signIn({
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe({
        next: () => this.router.navigate(['home']),
        error: (error) => {
          this.isLoggingIn = false;
          this.snackBar.open(error.message, 'OK', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: 3000,
          });
        },
      });
  }

  recoverPassword() {
    this.isRecoveringPassword = true;

    this.authService.recoverPassword(this.form.value.email).subscribe({
      next: () => {
        this.isRecoveringPassword = false;
      },
      error: (error) => {
        this.isRecoveringPassword = false;
      },
    });
  }

  onToggleAsideNav() {
    this.isAsideNavOpen = !this.isAsideNavOpen;
  }

  clearOverlay() {
    if (this.isAsideNavOpen) {
      this.isAsideNavOpen = false;
    }
  }
}

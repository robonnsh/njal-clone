import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form!: FormGroup;
  isLoggingIn = false;
  hide = true;
  isAsideNavOpen: boolean = false;

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

  // login
  onLogin(loginForm: FormGroup) {
    this.isLoggingIn = true;

    this.authService
      .signIn({
        email: this.form.value.email,
        password: this.form.value.password,
      })
      .subscribe({
        next: () => this.router.navigate(['admin-panel']),
        error: (error) => {
          this.isLoggingIn = false;
          this.snackBar.open(error.message, 'OK', {
            duration: 3000,
          });
        },
      });
  }
  visibility() {
    this.hide = !this.hide;
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

import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  showLoginComponents: boolean = true;
  isAsideNavOpen: boolean = false;
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {}

  onToggleAsideNav() {
    this.isAsideNavOpen = !this.isAsideNavOpen;
  }

  clearOverlay() {
    if (this.isAsideNavOpen) {
      this.isAsideNavOpen = false;
    }
  }

  // loginUser() {
  //   if (this.loginForm.valid) {
  //     const { email, password } = this.loginForm.value;
  //     this.authService.getUserByEmail(email as string).subscribe((res) => {
  //       if (res.length > 0 && res[0].password === password) {
  //         this.toast.success('Login successfully');
  //         this.router.navigate(['/user-logged']);
  //       } else {
  //         this.toast.error('Invalid email or password');
  //       }
  //     });
  //   }
  // }
}

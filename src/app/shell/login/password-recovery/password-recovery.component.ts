import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrl: './password-recovery.component.scss',
})
export class PasswordRecoveryComponent implements OnInit {
  form!: FormGroup;
  isRecoveringPassword = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  recoverPassword(): void {
    this.isRecoveringPassword = true;
    this.authService.recoverPassword(this.form.value.email).subscribe(
      () => {
        this.snackBar.open('Password recovery email sent', 'OK', {
          duration: 5000,
        });
      },
      (error) => {
        this.isRecoveringPassword = false;
        this.snackBar.open(error.message, 'OK', { duration: 5000 });
      }
    );
  }
}

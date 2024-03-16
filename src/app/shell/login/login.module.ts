import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import {
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
const routes: Routes = [
  {
    path: 'password-recovery',
    component: PasswordRecoveryComponent,
  },
  {
    path: 'notjustalabel',
    component: MainComponent,
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
  },
];
@NgModule({
  declarations: [LoginComponent, RegisterComponent, PasswordRecoveryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ],
  exports: [LoginComponent],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { horizontalPosition: 'center', verticalPosition: 'top' },
    },
  ],
})
export class LoginModule {}

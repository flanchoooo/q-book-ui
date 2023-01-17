import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }

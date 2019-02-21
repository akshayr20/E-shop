import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication.routes';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule],
  declarations: [LoginComponent, ForgotPasswordComponent]
})
export class AuthenticationModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication.routes';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CommonDirectivesModule } from '@e-shop/common/directives';

@NgModule({
  imports: [CommonModule, CommonDirectivesModule, AuthenticationRoutingModule],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    CreateAccountComponent
  ]
})
export class AuthenticationModule {}

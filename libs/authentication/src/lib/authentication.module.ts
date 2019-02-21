import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authenticationRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LoginComponent]
})
export class AuthenticationModule {}

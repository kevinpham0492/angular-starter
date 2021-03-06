import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent, ForgotPasswordPageComponent } from './containers';
import { CONFIG } from './auth.config';

const routes: Routes = [
  {
    path: CONFIG.LOGIN.PATH,
    component: LoginPageComponent,
    data: { title: 'auth.login.title' }
  },
  {
    path: CONFIG.FORGOT_PASSWORD.PATH,
    component: ForgotPasswordPageComponent,
    data: { title: 'auth.forgotPassword.title' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

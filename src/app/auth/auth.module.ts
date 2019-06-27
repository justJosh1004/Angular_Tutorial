import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    ReactiveFormsModule,
    AngularFireAuthModule,
    SharedModule,
    AuthRoutingModule
  ],
  exports: []
})
export class AuthModule {}

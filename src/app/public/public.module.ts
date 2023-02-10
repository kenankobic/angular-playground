import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';



@NgModule({
  declarations: [
    PublicLayoutComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }

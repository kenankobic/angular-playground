import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './layout/header/header.component';
import { AngularComponent } from './angular/angular/angular.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ReactComponent } from './react/react.component';
import { AngularPipesComponent } from './angular/angular-pipes/angular-pipes.component';
import { AngularComponentsComponent } from './angular/angular-components/angular-components.component';
import { AngularStylesComponent } from './angular/angular-styles/angular-styles.component';
import { AngularAnimationsComponent } from './angular/angular-animations/angular-animations.component';



@NgModule({
  declarations: [
    PublicLayoutComponent,
    LoginComponent,
    RegistrationComponent,
    HomepageComponent,
    HeaderComponent,
    AngularComponent,
    AngularPipesComponent,
    AboutMeComponent,
    ReactComponent,
    AngularComponentsComponent,
    AngularStylesComponent,
    AngularAnimationsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PublicModule { }

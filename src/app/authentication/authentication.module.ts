import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UiModuleModule } from '../ui-module/ui-module.module';
import { FeatureModule } from '../feature/feature.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    UiModuleModule, // import ui 
    FeatureModule
  ]
})
export class AuthenticationModule { }

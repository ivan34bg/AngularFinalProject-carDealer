import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent
  ]
})
export class UserModule { }

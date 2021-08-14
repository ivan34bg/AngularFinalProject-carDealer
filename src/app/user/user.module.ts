import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { FormsModule } from '@angular/forms';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ChangeProfilePictureComponent } from './change-profile-picture/change-profile-picture.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent,
    EditProfileComponent,
    ProfileInfoComponent,
    ChangeProfilePictureComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    ProfileViewComponent,
    ProfileInfoComponent,
    EditProfileComponent,
    ChangeProfilePictureComponent
  ]
})
export class UserModule { }

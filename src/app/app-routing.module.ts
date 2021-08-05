import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './car-ads/create/create.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileViewComponent } from './user/profile-view/profile-view.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'profile',
    component: ProfileViewComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsComponent } from './car-ads/ad-details/ad-details.component';
import { BrowseComponent } from './car-ads/browse/browse.component';
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
    path: 'browse',
    component: BrowseComponent
  },
  {
    path: 'details',
    component: AdDetailsComponent
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

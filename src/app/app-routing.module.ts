import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsViewComponent } from './car-ads/ad-details-view/ad-details-view.component';
import { AdDetailsComponent } from './car-ads/ad-details/ad-details.component';
import { BrowseComponent } from './car-ads/browse/browse.component';
import { CreateComponent } from './car-ads/create/create.component';
import { EditAdComponent } from './car-ads/edit-ad/edit-ad.component';
import { FavoritesComponent } from './car-ads/favorites/favorites.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileInfoComponent } from './user/profile-info/profile-info.component';
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
    component: ProfileViewComponent,
    children: [
      {
        path: '',
        component: ProfileInfoComponent
      },
      {
        path: 'edit',
        component: EditProfileComponent
      }
    ]
  },
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'details/:id',
    component: AdDetailsViewComponent,
    children: [
      {
        path: '',
        component: AdDetailsComponent
      },
      {
        path: 'edit',
        component: EditAdComponent
      }
    ]
  },
  {
    path: 'favorites',
    component: FavoritesComponent
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

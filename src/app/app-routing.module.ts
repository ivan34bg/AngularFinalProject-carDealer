import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsViewComponent } from './car-ads/ad-details-view/ad-details-view.component';
import { AdDetailsComponent } from './car-ads/ad-details/ad-details.component';
import { BrowseComponent } from './car-ads/browse/browse.component';
import { CreateComponent } from './car-ads/create/create.component';
import { EditAdComponent } from './car-ads/edit-ad/edit-ad.component';
import { FavoritesComponent } from './car-ads/favorites/favorites.component';
import { MyAdsComponent } from './car-ads/my-ads/my-ads.component';
import { LoggedInGuardGuard } from './core/guards/logged-in-guard.guard';
import { RightUserGuardGuard } from './core/guards/right-user-guard.guard';
import { ChangeProfilePictureComponent } from './user/change-profile-picture/change-profile-picture.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { LoginComponent } from './user/login/login.component';
import { ProfileInfoComponent } from './user/profile-info/profile-info.component';
import { ProfileViewComponent } from './user/profile-view/profile-view.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'browse'
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
    component: CreateComponent,
    canActivate: [LoggedInGuardGuard]
  },
  {
    path:'myAds',
    component: MyAdsComponent,
    canActivate: [LoggedInGuardGuard]
  },
  {
    path: 'profile',
    component: ProfileViewComponent,
    canActivate: [LoggedInGuardGuard],
    children: [
      {
        path: '',
        component: ProfileInfoComponent
      },
      {
        path: 'editProfileInfo',
        component: EditProfileComponent,
        canActivate: [LoggedInGuardGuard]
      },
      {
        path: 'changeProfilePicture',
        component: ChangeProfilePictureComponent
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
        component: EditAdComponent,
        canActivate: [RightUserGuardGuard] 
      }
    ]
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [LoggedInGuardGuard]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'browse'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

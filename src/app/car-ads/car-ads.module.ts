import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { BrowseComponent } from './browse/browse.component';
import { RouterModule } from '@angular/router';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { CoreModule } from '../core/core.module';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [
    CreateComponent,
    BrowseComponent,
    AdDetailsComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    CreateComponent,
    BrowseComponent,
    AdDetailsComponent,
    FavoritesComponent
  ]
})
export class CarAdsModule { }

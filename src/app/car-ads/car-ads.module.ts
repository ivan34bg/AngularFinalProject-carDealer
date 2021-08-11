import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { BrowseComponent } from './browse/browse.component';
import { RouterModule } from '@angular/router';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { CoreModule } from '../core/core.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { FormsModule } from '@angular/forms';
import { EditAdComponent } from './edit-ad/edit-ad.component';
import { AdDetailsViewComponent } from './ad-details-view/ad-details-view.component';



@NgModule({
  declarations: [
    CreateComponent,
    BrowseComponent,
    AdDetailsComponent,
    FavoritesComponent,
    EditAdComponent,
    AdDetailsViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    CreateComponent,
    BrowseComponent,
    AdDetailsComponent,
    FavoritesComponent,
    AdDetailsViewComponent
  ]
})
export class CarAdsModule { }

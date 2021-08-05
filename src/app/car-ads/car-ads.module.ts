import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { BrowseComponent } from './browse/browse.component';



@NgModule({
  declarations: [
    CreateComponent,
    BrowseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateComponent
  ]
})
export class CarAdsModule { }

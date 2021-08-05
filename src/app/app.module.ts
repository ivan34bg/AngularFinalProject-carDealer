import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarAdsModule } from './car-ads/car-ads.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    CarAdsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

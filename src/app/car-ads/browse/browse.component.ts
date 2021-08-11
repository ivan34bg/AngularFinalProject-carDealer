import { Component, OnInit } from '@angular/core';
import { CarAdService } from 'src/app/car-ad.service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent{
  carAds = this.carAdService.localCarAds;
  get loggedUser(){
    return this.userService.getLoggedUser();
  }
  get isUserLogged(){
    return this.userService.isUserLogged()
  }
  constructor(private carAdService: CarAdService, private userService: UserService) { }

  addFavorite(adId: number){
    if(this.isUserLogged){
      this.loggedUser?.addAdAsFavorite(adId);
      console.log(this.loggedUser?.getFavoriteAds())
    }
  }

  removeFavorite(adId: number){
    if(this.isUserLogged){
      this.loggedUser?.removeAdFromFavorites(adId);
      console.log(this.loggedUser?.getFavoriteAds())
    }
  }

}

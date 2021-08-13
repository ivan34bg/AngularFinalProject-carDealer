import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarAdService } from 'src/app/car-ad.service';
import { carAd } from 'src/app/models/car-ad.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit{

  favoriteAdsOfUser: carAd[] | undefined

  constructor(private userService: UserService, private carAdService: CarAdService, private router: Router) {}  
  
  get loggedUser(){
    return this.userService.getLoggedUser();
  }

  ngOnInit(): void {
    this.favoriteAdsOfUser = this.carAdService.arrOfFavorites(this.loggedUser?.getFavoriteAds()!)
  }

  removeFavorite(adId: number){
    this.loggedUser?.removeAdFromFavorites(adId);
    this.router.navigate(['/browse'])
  }

}

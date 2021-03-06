import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from './core/injection-tokens';
import { carAds } from './data/carAds.data';
import { carAd } from './models/car-ad.model';

@Injectable({
  providedIn: 'root'
})
export class CarAdService {

  currentCarAdId: number = 3;
  localCarAds: carAd[] = carAds;

  constructor(private router: Router,  @Inject(LocalStorage) private localStorage: Window['localStorage']) { }

  getCarById(id: number){
    return carAds.find(a => a.getId() === id);
  }

  submitNewAd(imageLink:string, brand:string, model:string, year: number, mileage: number, power: number, price: number, isNew: boolean, location: string, description: string){
    let newCarAd = new carAd(this.currentCarAdId, imageLink, brand, model, year, mileage, power, description, price, location, isNew, Number(this.localStorage.getItem('userId')));
    carAds.push(newCarAd);
    this.currentCarAdId++;
    this.router.navigate(['/browse']);
  }

  editOldAd(imageLink: string, brand: string, model: string, year: number, mileage: number, horsepower: number, price: number, description: string, location: string, carAdId: number){
    carAds.find(a => a.getId() === carAdId)?.editAd(imageLink, brand, model, year, mileage, horsepower, price, description, location);
  }

  deleteAnAd(adId: number){
    let index = carAds.findIndex(a => a.getId() === adId);
    carAds.splice(index, 1);
  }

  arrOfFavorites(favoriteAdsIds: number[]){
    let arr: carAd[] = [];
    for(let id of favoriteAdsIds){
      if(carAds.find(a => a.getId() == id) != null)
      arr.push(carAds.find(a => a.getId() == id)!)
    }
    return arr;
  }

  arrOfMyAds(): carAd[]{
    let userId = Number(this.localStorage.getItem('userId'));
    return carAds.filter(a => a.getPosterId() === userId);
  }

  returnPosterOfAd(adId: number): number{
    return carAds.find(a => a.getId() === adId)?.getPosterId()!;
  }
}

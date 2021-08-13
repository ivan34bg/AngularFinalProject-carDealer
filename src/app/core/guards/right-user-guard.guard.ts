import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CarAdService } from 'src/app/car-ad.service';
import { LocalStorage } from '../injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class RightUserGuardGuard implements CanActivate {
  constructor(private carAdService: CarAdService, @Inject(LocalStorage) private localStorage: Window['localStorage'], private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let adId = Number(state.url.split('/')[2]);
    if(this.carAdService.returnPosterOfAd(adId) === Number(this.localStorage.getItem('userId'))){
      return true;
    }
    this.router.navigate([`/details/${adId}`])
    return false;
  }
}

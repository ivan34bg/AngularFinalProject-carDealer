import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { LocalStorage } from '../injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardGuard implements CanActivate {

  constructor(private userService: UserService,  @Inject(LocalStorage) private localStorage: Window['localStorage'], private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userService.isUserLogged() && this.userService.checkUsername(this.localStorage.getItem('username')!)){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}

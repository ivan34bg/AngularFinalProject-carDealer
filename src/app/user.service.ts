import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from './core/injection-tokens';
import { users } from './data/users.data';
import { User } from './models/user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLogged:boolean = false;
  private loggedUser: User | undefined

  constructor( @Inject(LocalStorage) private localStorage: Window['localStorage'], private router: Router) {}

  loginUser(username: string, password: string){
    this.loggedUser = users.find(u => u.getUsername() == username && u.getPassword() == password);
    if( this.loggedUser != undefined){
      this.localStorage.setItem('username', this.loggedUser.getUsername())
      this.isLogged = true;
      this.router.navigate(['/browse']);
    }
  }

  registerUser(user: User){
    if(users.find(u => u.getUsername() == user.getUsername()) == null && users.find(u => u.getEmail() == user.getEmail()) == null){
      users.push(user);
      console.log(user.getPhoneNumber())
      this.loginUser(user.getUsername(), user.getPassword());
    }
    else(console.log('no'))

  }

  logoutUser(){
    this.localStorage.removeItem('username');
    this.isLogged = false;
    this.router.navigate(['/login']);
  }

  isUserLogged(): boolean{
    return this.isLogged;
  }
}

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

  loginUser(username: string, password: string): boolean{
    this.loggedUser = users.find(u => u.getUsername() == username && u.getPassword() == password);
    if( this.loggedUser != undefined){
      this.localStorage.setItem('username', this.loggedUser.getUsername())
      this.isLogged = true;
      this.router.navigate(['/browse']);
      return true;
    }
    return false;
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

  getLoggedUser(){
    return this.loggedUser;
  }

  checkIfPasswordMatches(password: string): boolean{
    if(this.loggedUser?.getPassword() === password){
      return true;
    }
    return false;
  }

  checkUsername(username: string): boolean{
    if(users.find(u => u.getUsername() === username) !== undefined){
      return true;
    }
    return false;
  }

  checkEmail(email: string){
    if(users.find(u => u.getEmail() === email) !== undefined){
      return true;
    }
    return false;
  }

  changeUserInfo(user: User){
    users.find(u => u.getUsername() == this.localStorage.getItem('username'))?.changeUserInfo(user.getPassword(), user.getPhoneNumber());
  }
}

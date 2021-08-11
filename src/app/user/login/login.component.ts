import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  userExisting: boolean = true;

  get userExists(){
    return this.userExisting;
  }

  constructor(private userService: UserService) { }

  onSubmit(form: NgForm): void{
    if(this.userService.loginUser(form.value.username, form.value.password) == false){
      this.userExisting = false;
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from 'src/app/data/users.data';
import { User } from 'src/app/models/user.module';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{

  isUsernameUsed: boolean = false;
  isEmailUsed: boolean = false;

  get usernameUsed() {
    return this.isUsernameUsed;
  }

  get emailUsed(){
    return this.isEmailUsed;
  }

  constructor(private userService: UserService) { }

  onSubmit(form: NgForm){
    this.isUsernameUsed = this.userService.checkUsername(form.value.username);
    this.isEmailUsed = this.userService.checkEmail(form.value.email);
    if(form.valid && !this.isUsernameUsed && !this.isEmailUsed){
      let user  = new User(form.value.email, form.value.username, form.value.password, form.value.phoneNum)
      this.userService.registerUser(user);
    }
  }
}

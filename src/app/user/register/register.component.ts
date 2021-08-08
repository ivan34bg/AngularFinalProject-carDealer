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

  constructor(private userService: UserService) { }

  onSubmit(form: NgForm){
    if(form.valid){
      let user  = new User(form.value.email, form.value.username, form.value.password, form.value.phoneNum)
      this.userService.registerUser(user);
    }
  }

}

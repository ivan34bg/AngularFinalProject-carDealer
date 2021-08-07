import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private userService: UserService) { }

  onSubmit(form: NgForm): void{
    this.userService.loginUser(form.value.username, form.value.password);
  }
}

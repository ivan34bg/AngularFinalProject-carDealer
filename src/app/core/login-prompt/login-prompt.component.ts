import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login-prompt',
  templateUrl: './login-prompt.component.html',
  styleUrls: ['./login-prompt.component.scss']
})
export class LoginPromptComponent implements OnInit {

  get isLogged(){
    return this.userService.isUserLogged();
  }

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

}

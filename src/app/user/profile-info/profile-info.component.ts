import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent {

  constructor(private userService: UserService) { }

  username = this.userService.getLoggedUser()?.getUsername();
  email = this.userService.getLoggedUser()?.getEmail();
  get phoneNum(){
    return this.userService.getLoggedUser()?.getPhoneNumber();
  }

}

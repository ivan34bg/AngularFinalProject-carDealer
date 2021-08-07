import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  get isLogged(){
    return this.userService.isUserLogged();
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.userService.logoutUser();
  }

}

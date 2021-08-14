import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-change-profile-picture',
  templateUrl: './change-profile-picture.component.html',
  styleUrls: ['./change-profile-picture.component.scss']
})
export class ChangeProfilePictureComponent{

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(form: NgForm){
    this.userService.getLoggedUser()?.setImageLink(form.value.profilePicLink);
    this.router.navigate(['/profile']);
  }
}

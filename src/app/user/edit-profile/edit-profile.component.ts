import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  isEditing:boolean = false;
  doesPassMatch: boolean = true;

  constructor(private userService: UserService, private router: Router) { }

  get doesOldPassMatch(){
    return this.doesPassMatch;
  }
  get phoneNum(){
    return this.userService.getLoggedUser()?.getPhoneNumber();
  }

  ngOnInit(): void {
  }

  applyEdit(form: NgForm){
    let isNumberNew: boolean = false;
    let isPassNew: boolean = false;
    if(form.value.phoneNum !== this.phoneNum && form.controls.phoneNum.dirty){
      isNumberNew = true;
    }
    if(form.value.password !== '' && form.controls.password.dirty){
      isPassNew = true;
    }
    if(!this.userService.checkIfPasswordMatches(form.value.oldPassword)){
      this.doesPassMatch = false;
    }
    else{
      this.doesPassMatch = true;
    }
    if(isNumberNew && isPassNew && !form.controls.oldPassword.errors?.required && this.doesPassMatch){
      this.userService.changeUserInfo(new User(this.userService.getLoggedUser()!.getUserId(),
        this.userService.getLoggedUser()!.getEmail(), 
        this.userService.getLoggedUser()!.getUsername(),
        form.value.password, 
        form.value.phoneNum, []));
        this.doesPassMatch = true;
        this.router.navigate(['/profile']);
    }
    else if(isPassNew && !isNumberNew && !form.controls.oldPassword.errors?.required && this.doesPassMatch){
      this.userService.changeUserInfo(new User(this.userService.getLoggedUser()!.getUserId(),
        this.userService.getLoggedUser()!.getEmail(), 
        this.userService.getLoggedUser()!.getUsername(),
        form.value.password, 
        this.userService.getLoggedUser()!.getPhoneNumber(), []));
        this.doesPassMatch = true;
        this.router.navigate(['/profile']);
    }
    else if(!isPassNew && isNumberNew && !form.controls.oldPassword.errors?.required && this.doesPassMatch){
      this.userService.changeUserInfo(new User(this.userService.getLoggedUser()!.getUserId(),
        this.userService.getLoggedUser()!.getEmail(), 
        this.userService.getLoggedUser()!.getUsername(),
        this.userService.getLoggedUser()!.getPassword(), 
        form.value.phoneNum, []));
        this.doesPassMatch = true;
        this.router.navigate(['/profile']);
    }
  }
}

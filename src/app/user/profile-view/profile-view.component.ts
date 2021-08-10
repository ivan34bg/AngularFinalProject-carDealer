import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent{

  isEditing:boolean = false;
  doesPassMatch: boolean = true;

  constructor(private userService: UserService) { }

  get doesOldPassMatch(){
    return this.doesPassMatch;
  }

  username = this.userService.getLoggedUser()?.getUsername();
  email = this.userService.getLoggedUser()?.getEmail();
  get phoneNum(){
    return this.userService.getLoggedUser()?.getPhoneNumber();
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
        form.value.phoneNum));
        this.doesPassMatch = true;
        this.editProfileInfo();
    }
    else if(isPassNew && !isNumberNew && !form.controls.oldPassword.errors?.required && this.doesPassMatch){
      this.userService.changeUserInfo(new User(this.userService.getLoggedUser()!.getUserId(),
        this.userService.getLoggedUser()!.getEmail(), 
        this.userService.getLoggedUser()!.getUsername(),
        form.value.password, 
        this.userService.getLoggedUser()!.getPhoneNumber()));
        this.doesPassMatch = true;
        this.editProfileInfo();
    }
    else if(!isPassNew && isNumberNew && !form.controls.oldPassword.errors?.required && this.doesPassMatch){
      this.userService.changeUserInfo(new User(this.userService.getLoggedUser()!.getUserId(),
        this.userService.getLoggedUser()!.getEmail(), 
        this.userService.getLoggedUser()!.getUsername(),
        this.userService.getLoggedUser()!.getPassword(), 
        form.value.phoneNum));
        this.doesPassMatch = true;
        this.editProfileInfo();
    }
    
  }

  editProfileInfo(){
    this.isEditing = !this.isEditing;
  }
}

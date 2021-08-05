import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginPromptComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LoginPromptComponent
  ]
})
export class CoreModule { }

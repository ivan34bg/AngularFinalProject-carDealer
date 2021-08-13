import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { LoginPromptComponent } from './login-prompt/login-prompt.component';
import { LocalStorage } from './injection-tokens';
import { LoggedInGuardGuard } from './guards/logged-in-guard.guard';



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
  ],
  providers: [
    {
      provide: LocalStorage,
      useValue: window.localStorage
    }
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, UsersignupComponent],
  //  exports : [LoginComponent]
})
export class UserModule { }

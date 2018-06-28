import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminloginComponent, SignupComponent]
})
export class AdminModule { }

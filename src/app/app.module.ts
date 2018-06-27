import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserModule} from './user/user.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';

const route : Routes = [
  { path : '', component : LoginComponent},
  
 
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

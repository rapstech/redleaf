import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserModule} from './user/user.module';
import {AgentModule} from './agent/agent.module';
import {AdminModule} from './admin/admin.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { AgentloginComponent } from './agent/agentlogin/agentlogin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UsersignupComponent } from './user/usersignup/usersignup.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const route : Routes = [
  { path : '', redirectTo : 'admin' , pathMatch: 'full'},
  { path : 'user', component : LoginComponent},
  { path : 'agent', component : AgentloginComponent},
  { path : 'admin', component : AdminloginComponent},
  { path : 'usersignup', component: UsersignupComponent},
  { path : 'admin', component: AdminloginComponent},
  { path : 'dashboard', component: DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),UserModule,AgentModule,AdminModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

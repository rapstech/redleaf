import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentloginComponent } from './agentlogin/agentlogin.component';
import { AgentsignupComponent } from './agentsignup/agentsignup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AgentloginComponent, AgentsignupComponent]
})
export class AgentModule { }

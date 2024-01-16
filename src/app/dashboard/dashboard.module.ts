import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashHomeComponent,
    EmployeeInfoComponent,
    DashboardComponent
   
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

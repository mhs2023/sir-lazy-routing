import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashhome', component: DashHomeComponent},
  {path: 'employeeInfo', component: EmployeeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
